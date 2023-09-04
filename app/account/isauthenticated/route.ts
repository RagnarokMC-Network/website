import { NextResponse } from 'next/server';
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('usr')
  const token = searchParams.get('tkn')

  let response: any = {
    response: false,
    user: null
  }

  if (username && token) {
    const user: any = await executeQuery({
      query: "SELECT * FROM nlogin WHERE lgntkn = ? AND last_name = ?",
      values: [token, username],
      dbs: "s64_nLogin",
    });

    if (user[0]) {
      response.response = true;
      response.user = user[0];
    } else {
      response.response = false;
      response.uuser = null;
    }
  } else {
    response.response = false;
    response.uuser = null;
  }
 
  return NextResponse.json({ response })
}