/*import mysql from 'mysql2/promise';

export default async function executeQuery({ query, values }:{query:string, values:any}) {

  const db = await mysql.createConnection({
    host: '66.45.252.244',
    user: 'itadmin',
    password: "!mre5XDx941u$kym",
    database: 's63_luckperms'
  });

  try {
    const [rows, fields] = await db.execute(query, values);
    await db.end();
    return fields;
  } catch (error) {
    return { error };
  }
}*/

import mysql from "serverless-mysql";
const dbPerms = mysql({
  config: {
    host: "66.45.252.244",
    database: "s63_luckperms",
    user: "itadmin",
    password: "!mre5XDx941u$kym",
  },
});

const dbLitebans = mysql({
  config: {
    host: "66.45.252.244",
    database: "s63_litebans",
    user: "itadmin",
    password: "!mre5XDx941u$kym",
  },
});

const dbAuth = mysql({
  config: {
    host: "66.45.252.244",
    database: "s64_nLogin",
    user: "u64_litST8GZp9",
    password: "xIkx!tFwaBiUkAf+IpKX5lsN",
  },
});

const dbNews = mysql({
  config: {
    host: "127.0.0.1",
    database: "ragnarok",
    user: "admin",
    password: "Iq6b6zriPIe%y3fS",
  },
});

export default async function excuteQuery({
  query,
  values,
  dbs,
}: {
  query: any;
  values: any;
  dbs: string;
}) {
  try {
    let db = dbNews
    
    switch (dbs) {
      case "s63_litebans":
        db = dbLitebans;
        break;
      case "s63_luckperms":
        db = dbPerms;
        break;
      case "s64_nLogin":
        db = dbAuth;
        break;
      case "ragnarok":
        db = dbNews;
        break;
    }

    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
