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
      values: [],
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

export async function PUT(req: Request) {
  const data = await req.json();

  let id = data.id;
  let modification_date = data.last_modification_date;
  let body = data.body;

  await executeQuery({
    query:
      "UPDATE annunci SET body=?, last_modification_date=? WHERE annunci_id=?",
    values: [body, modification_date, id],
    dbs: "ragnarok",
  });

  return NextResponse.json({});
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (!postId) return NextResponse.json({});

  await executeQuery({
    query: "DELETE FROM annunci WHERE annunci_id=?",
    values: [postId],
    dbs: "ragnarok",
  });

  return NextResponse.json({});
}

export async function POST(req: Request) {
  const data = await req.json();

  let creation_date = data.creation_date;
  let title = data.title;
  let body = data.body;
  let author = data.author;
  let tag = data.tag;
  let image = data.image;

  await executeQuery({
    query:
      "INSERT INTO annunci (creation_date, title, body, author, tag, images) VALUES (?, ?, ?, ?, ?, ?)",
    values: [creation_date, title, body, author, tag, image],
    dbs: "ragnarok",
  });

  return NextResponse.json({});
}
