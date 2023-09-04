import excuteQuery from "./connector";
import jsCookie from "js-cookie"

export default async function isLoggedIn() {
  let token = jsCookie.get("lgntkn");
  let username = jsCookie.get("usr");
  
  if (token) {

    console.log(token);
    console.log(username);

    const user: any = await excuteQuery({
      query: "SELECT * FROM nlogin WHERE lgntkn = ? AND realname = ?",
      values: [token, username],
      dbs: "s64_nLogin",
    });

    console.log(user);

    return 
  } else {
    return false;
  }
}