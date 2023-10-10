import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uuid = searchParams.get("uuid");

  if (uuid) {
    const bans: any = await executeQuery({
      query: "SELECT * FROM litebans_bans WHERE uuid = ?",
      values: [uuid],
      dbs: "s63_litebans",
    });

    const mutes: any = await executeQuery({
      query: "SELECT * FROM litebans_mutes WHERE uuid = ?",
      values: [uuid],
      dbs: "s63_litebans",
    });

    const warns: any = await executeQuery({
      query: "SELECT * FROM litebans_warnings WHERE uuid = ?",
      values: [uuid],
      dbs: "s63_litebans",
    });

    return NextResponse.json({
      error: false,
      code: -1,
      data: {
        bans,
        mutes,
        warns,
      }
    });
  }

  return NextResponse.json({
    error: true,
    code: 1
  });
}