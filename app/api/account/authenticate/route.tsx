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
  console.log(hash);
  let hashS = hash + dbPass.split("$")[3];
  console.log(hashS, dbPass.split("$")[3]);
  let hashSH = crypto.createHash("sha256").update(hashS).digest("hex");
  console.log(hashSH);

  if (hashSH === dbPass.split("$")[2]) {
    return true;
  }

  return false;
};

export async function POST(request: Request) {
  const data = await request.json();

  if (data && data.username && data.password) {
    let hash = await getHashFromDatabase(data.username);

    if (hash) {
      if (isValidPassword(data.password, hash)) {
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
