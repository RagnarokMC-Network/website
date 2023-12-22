import { NextResponse } from "next/server";
import crypto from "crypto";
import executeQuery from "@/utils/connector";

export async function POST(request: Request) {
  console.log(request);

  return NextResponse.json({
    error: true,
    code: 2,
  });
}

export async function GET(request: Request) {
  console.log(request);

  return NextResponse.json({
    error: true,
    code: 2,
  });
}
