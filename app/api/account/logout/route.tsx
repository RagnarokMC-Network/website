import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");
  const token = searchParams.get("token");

  // Vedere se necessario

  return NextResponse.json({});
}
