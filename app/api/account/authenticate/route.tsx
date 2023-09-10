import { NextResponse } from "next/server";
import crypto from "crypto";
import executeQuery from "@/utils/connector";

const getHashFromDatabase = async (username: string) => {
  if (!username) return null;

  const uPerms: any = await executeQuery({
    query: "SELECT * FROM nlogin WHERE last_name = ?",
    values: [username],
    dbs: "s64_nLogin",
  });

  if (uPerms[0] && Object.hasOwn(uPerms[0], "password"))
    return uPerms[0].password;
  else return null;
};

const isValidPassword = (password: string, dbPass: string) => {
  let hash = crypto.createHash("sha256").update(password).digest("hex");
  let hashS = hash + dbPass.split("$")[3];
  let hashSH = crypto.createHash("sha256").update(hashS).digest("hex");

  if (hashSH === dbPass.split("$")[2]) {
    return true;
  }

  return false;
};

const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = () => {
  return rand() + rand(); // to make it longer
};

export async function POST(request: Request) {
  const data = await request.json();

  if (data && data.username && data.password) {
    let username = data.username;
    let password = data.password;

    let hash = await getHashFromDatabase(username);

    if (hash) {
      if (isValidPassword(password, hash)) {
        let lgntoken: any = token();
        let lgntokenexp = new Date();
        lgntokenexp.setDate(lgntokenexp.getDate() + 14);

        await executeQuery({
          query:
            "UPDATE nlogin SET lgntkn = ?, tkn_expiration = ? WHERE last_name = ?",
          values: [lgntoken, lgntokenexp, username],
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
            return NextResponse.json({
              user: {
                username: user[0].last_name,
                last_login: user[0].last_login,
                primary_group: perms[0].primary_group,
                uuid: perms[0].uuid,
              },
              token: lgntoken,
              error: false,
              code: 0,
            });
          } else {
            return NextResponse.json({
              error: true,
              code: 4,
            });
          }
        } else {
          return NextResponse.json({
            error: true,
            code: 3,
          });
        }
      } else {
        return NextResponse.json({
          error: true,
          code: 2,
        });
      }
    } else {
      return NextResponse.json({
        error: true,
        code: 2,
      });
    }
  } else {
    return NextResponse.json({
      error: true,
      code: 1,
    });
  }

  /*const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const secret = searchParams.get("secret");
  const type = searchParams.get("type"); // password/token

  if (username && secret && type) {
  } else {
    return NextResponse.json({});
  }*/
}
