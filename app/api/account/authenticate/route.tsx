import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const secret = searchParams.get("secret");
  const type = searchParams.get("type"); // password/token

  if (username && secret && type) {
  } else {
    return NextResponse.json({});
  }
}
