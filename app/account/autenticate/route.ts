import { NextResponse } from 'next/server';
import executeQuery from "@/utils/connector";
import sha256 from 'crypto-js/sha256';
import Hex from "crypto-js/enc-hex";
import crypto from "crypto";

const SALT_LENGTH = 16;

const getHashFromDatabase = async (username: string) => {

  const uPerms: any = await executeQuery({
    query: "SELECT * FROM nlogin WHERE last_name = ?",
    values: [username],
    dbs: "s64_nLogin",
  });

  if (uPerms[0] && Object.hasOwn(uPerms[0], 'password'))
    return uPerms[0].password
}

const isValidPassword = (password: string, compare: string) => {
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

  let response: any = {
    response: false,
    token: null,
    user: null,
  }

  if (username && password) {
    let hash = await getHashFromDatabase(username);
    if (hash && isValidPassword(password, hash)) {
      let lgntoken: any = token();

      const setToken: any = await executeQuery({
        query: "UPDATE nlogin SET lgntkn = ? WHERE last_name = ?",
        values: [lgntoken, username],
        dbs: "s64_nLogin",
      });

      const user: any = await executeQuery({
        query: "SELECT * FROM nlogin WHERE lgntkn = ? AND last_name = ?",
        values: [lgntoken, username],
        dbs: "s64_nLogin",
      })

      response.response = true;
      response.token = lgntoken;
      response.user = user[0];
    } else {
      response.response = false;
      response.token = null;
      response.user = null;
    }
  } else {
    response.response = false;
    response.token = null;
    response.user = null;
  }
 
  return NextResponse.json({ response })
}

const rand = () => {
  return Math.random().toString(36).substr(2); // remove `0.`
};

const token = () => {
  return rand() + rand(); // to make it longer
};