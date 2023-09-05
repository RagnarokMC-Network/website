import { NextResponse } from 'next/server';
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('usr')
  const token = searchParams.get('tkn')

  let ok = true

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
      let uuid = user[0].unique_id;
      uuid = [uuid.slice(0, 8), "-", uuid.slice(8)].join('');
      uuid = [uuid.slice(0, 13), "-", uuid.slice(13)].join('');
      uuid = [uuid.slice(0, 18), "-", uuid.slice(18)].join('');
      uuid = [uuid.slice(0, 23), "-", uuid.slice(23)].join('');

      const perms: any = await executeQuery({
        query: "SELECT * FROM luckperms_players WHERE uuid = ?",
        values: [uuid],
        dbs: "s63_luckperms",
      })

      if (perms[0]) {

        let userObj = {
          ...user[0],
          primary_group: perms[0].primary_group
        }

        response.response = true;
        response.user = userObj;

      } else {
        ok = false;
      }
    } else {
      ok = false
    }
  } else {
    ok = false
  }
 
  if (ok)
    return NextResponse.json({ response })
  else
    return NextResponse.json({})
}