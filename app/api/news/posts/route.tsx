import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (postId) {
    const articles: any = await executeQuery({
      query: "SELECT * FROM annunci WHERE annunci_id = ?",
      values: [postId],
      dbs: "ragnarok",
    });

    if (articles) return NextResponse.json(articles[0]);
    else
      return NextResponse.json({
        error: true,
        code: 1,
      });
  } else {
    const articles: any = await executeQuery({
      query: "SELECT * FROM annunci",
      values: null,
      dbs: "ragnarok",
    });

    if (articles) return NextResponse.json(articles);
    else
      return NextResponse.json({
        error: true,
        code: 1,
      });
  }
}
