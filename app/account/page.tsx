"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";

import styles from "./page.module.scss";

const Account = () => {
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");

  const login = async () => {
    const data = await fetch(
      `http://localhost:3000/account/autenticate?usr=${usr}&pwd=${pwd}`
    );

    const json = await data.json();
    console.log(json);
  };

  return (
    <main>
      <Hero
        title="Profilo personale"
        crumb={["Home", "Account"]}
        href={["/", "/account"]}
      />

      <section className={styles.section}>
        <SectionDescriptor
          title="Login"
          description="Collega il tuo account di minecraft proprio quì, così da poter vedere statistiche di gioco, leaderboards e molto altro! (Username e Password che hai utilizzato sul server)"
        />

        <div className={styles.loginWrapper}>
          <input
            onChange={(event) => setUsr(event.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(event) => setPwd(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={login}>Login</button>
        </div>
      </section>
    </main>
  );
};

export default Account;
