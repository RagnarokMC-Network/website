import { NextResponse } from 'next/server';
import executeQuery from "@/utils/connector";
import sha256 from 'crypto-js/sha256';
import Hex from "crypto-js/enc-hex";
import crypto from "crypto";

const SALT_LENGTH = 16;

const getHashFromDatabase = async (username: string) => {

  const uPerms: any = await executeQuery({
    query: "SELECT * FROM authme WHERE realname = ?",
    values: [username],
    dbs: "s64_AuthMe",
  });

  return uPerms.password
  
}

const isValidPassword = (password: string, compare: string) => {
  console.log(password, compare)
  let hash = crypto.createHash('sha256').update(password).digest('hex');
  let hashS = hash + compare.split("$")[2];
  let hashSH = crypto.createHash('sha256').update(hashS).digest('hex');

  if (hashSH === compare.split("$")[3]) {
    return true;
  }

  return false;
}


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('usr')
  const password = searchParams.get('pwd')

  let response = false;

  if (username && password) {
    console.log("A", password)
    let hash = await getHashFromDatabase(username);
    console.log("B", hash)
    if (hash && isValidPassword(password, hash)) {
      response = true;
    } else {
      response = false;
    }
  } else {
    response = false;
  }
 
  return NextResponse.json({ response })
}