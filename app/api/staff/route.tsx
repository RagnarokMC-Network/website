import { NextResponse } from "next/server";
import executeQuery from "@/utils/connector";

export async function GET(request: Request) {
  const uPerms: any = await executeQuery({
    query: "SELECT * FROM luckperms_user_permissions",
    values: null,
    dbs: "s63_luckperms",
  });

  const permissions = [
    { id: "owner", color: "#bf0f0f" },
    { id: "admin", color: "#ebab34" },
    { id: "developer", color: "#8c8c8c" },
    { id: "moderator+", color: "#349beb" },
    { id: "moderator", color: "#349beb" },
    { id: "builder", color: "#b90fbf" },
    { id: "helper+", color: "#2ca122" },
    { id: "helper", color: "#2ca122" },
  ];

  const permitted = uPerms.filter((el: any) => {
    if (permissions.some((al) => el.permission.includes(al.id))) {
      return el;
    }

    return;
  });

  const users: any = await executeQuery({
    query: "SELECT * FROM luckperms_players",
    values: null,
    dbs: "s63_luckperms",
  });

  if (!users) return [];

  const permNames = users.filter((el: any) => {
    if (permitted.some((al: any) => al.uuid == el.uuid)) {
      return el;
    }
  });

  let resColorless = permNames.sort(
    (a: any, b: any) =>
      permissions.findIndex((el) => el.id == a.primary_group) -
      permissions.findIndex((el) => el.id == b.primary_group)
  );

  let res = resColorless.map((el: any) => {
    // @ts-ignore
    el.color = permissions.find((al) => al.id == el.primary_group)?.color;
    return el;
  });
  let a = res.res;
  return NextResponse.json(res);
}
