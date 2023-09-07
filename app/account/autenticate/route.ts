import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";
import sha256 from "crypto-js/sha256";
import Hex from "crypto-js/enc-hex";
import crypto from "crypto";

const SALT_LENGTH = 16;

const getHashFromDatabase = async (username: string) => {
  const uPerms: any = await executeQuery({
    query: "SELECT * FROM nlogin WHERE last_name = ?",
    values: [username],
    dbs: "s64_nLogin",
  });

  if (uPerms[0] && Object.hasOwn(uPerms[0], "password"))
    return uPerms[0].password;
};

const isValidPassword = (password: string, compare: string) => {
  let hash = crypto.createHash("sha256").update(password).digest("hex");
  console.log(hash);
  let hashS = hash + compare.split("$")[3];
  console.log(hashS, compare.split("$")[3]);
  let hashSH = crypto.createHash("sha256").update(hashS).digest("hex");
  console.log(hashSH);

  if (hashSH === compare.split("$")[2]) {
    return true;
  }

  return false;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("usr");
  const password = searchParams.get("pwd");

  let ok = true;

  let response: any = {
    response: false,
    token: null,
    user: null,
  };

  if (username && password) {
    let hash = await getHashFromDatabase(username);

    if (hash && isValidPassword(password, hash)) {
      let lgntoken: any = token();

      await executeQuery({
        query: "UPDATE nlogin SET lgntkn = ? WHERE last_name = ?",
        values: [lgntoken, username],
        dbs: "s64_nLogin",
      });

      const user: any = await executeQuery({
        query: "SELECT * FROM nlogin WHERE lgntkn = ? AND last_name = ?",
        values: [lgntoken, username],
        dbs: "s64_nLogin",
      });

      if (user[0]) {
        let uuid = user[0].unique_id;
        uuid = [uuid.slice(0, 8), "-", uuid.slice(8)].join("");
        uuid = [uuid.slice(0, 13), "-", uuid.slice(13)].join("");
        uuid = [uuid.slice(0, 18), "-", uuid.slice(18)].join("");
        uuid = [uuid.slice(0, 23), "-", uuid.slice(23)].join("");

        const perms: any = await executeQuery({
          query: "SELECT * FROM luckperms_players WHERE uuid = ?",
          values: [uuid],
          dbs: "s63_luckperms",
        });

        if (perms[0]) {
          let userObj = {
            ...user,
            primary_group: perms[0].primary_group,
          };

          response.response = true;
          response.token = lgntoken;
          response.user = userObj;
        } else {
          console.log("er4");
          ok = false;
        }
      } else {
        console.log("er3");
        ok = false;
      }
    } else {
      console.log("er2");
      ok = false;
    }
  } else {
    console.log("er1");
    ok = false;
  }

  if (ok) return NextResponse.json({ response });
  else return NextResponse.json({});
}

const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = () => {
  return rand() + rand(); // to make it longer
};
