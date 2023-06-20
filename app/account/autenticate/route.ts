import { NextResponse } from 'next/server';
import sha256 from 'crypto-js/sha256';
import Hex from "crypto-js/enc-hex";
import crypto from "crypto";

const SALT_LENGTH = 16;

const getHashFromDatabase = (username: string) => {
  return "$SHA$41e0d5714395e8b4$260b3bc428b2dfe76f9676c84dc9f752e40358aa8fcc526aadbad0e5347eabf7"
}                            //$a1159e9df3670d549d04524532629f5477ceb7deec9b45e47e8c009506ecb2c8

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

  let response = false;

  if (username && password) {
    let hash = getHashFromDatabase(username);
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