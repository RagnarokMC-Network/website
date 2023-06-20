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

import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "66.45.252.244",
    database: "s63_luckperms",
    user: "itadmin",
    password: "!mre5XDx941u$kym"
  }
});
export default async function excuteQuery({ query, values }: {query: any, values: any}) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}