"use client";

import jsCookie from "js-cookie";
import excuteQuery from "@/utils/connector";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SectionDescriptor from "@/components/home/SectionDescriptor";

import styles from "./page.module.scss";

const Profile = () => {
  const [profile, setProfile]: any = useState(null);
  const [working, setWorking]: any = useState(false);
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState(false);

  const router = useRouter();

  const login = async () => {
    setWorking(true);

    const data: any = await fetch(
      `https://ragnarokmc.it/account/autenticate?usr=${usr}&pwd=${pwd}`
    );

    const json = await data.json();

    if (json.response.response == true) {
      jsCookie.set("lgntkn", json.response.token);
      jsCookie.set("usr", usr);
      setErr(false);
      setWorking(false);
    } else {
      jsCookie.remove("lgntkn");
      jsCookie.remove("usr");
      setErr(true);
      setWorking(false);
    }

    isLoggedIn(json.response.token, usr);
  };

  const isLoggedIn = async (token: any, username: any) => {
    const data: any = await fetch(
      `https://ragnarokmc.it/account/isauthenticated?usr=${username}&tkn=${token}`
    );

    const json = await data.json();

    if (!json.response.user) {
      setWorking(false);
    } else {
      setProfile(json.response.user);
      setWorking(false);
    }
  };

  const logout = () => {
    jsCookie.remove("lgntkn");
    jsCookie.remove("usr");
    setPwd("null");
    setUsr("null");
    setProfile(null);

    setWorking(true);
    isLoggedIn(null, null);
  };

  useEffect(() => {
    setErr(false);
    setWorking(true);
    let token = jsCookie.get("lgntkn");
    let username = jsCookie.get("usr");

    isLoggedIn(token, username);
  }, []);

  return (
    <main>
      {working ? (
        <div className={styles.spinnerWrapper}>
          <span className={styles.loader}></span>
        </div>
      ) : profile ? (
        <>
          <Hero
            title="Profilo personale"
            crumb={["Home", "Account"]}
            href={["/", "/account"]}
          />
          <div className={styles.account}>
            <div className={styles.image}>
              <Image
                src={`https://mc-heads.net/head/${profile?.last_name}`}
                fill={true}
                objectFit={"contain"}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{profile?.last_name}</p>
              <p className={styles.llogin}>
                {new Date(profile?.last_login).toLocaleDateString("it-IT", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <button onClick={logout} className={styles.logout}>
                Logout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Hero
            title="Collega Account"
            crumb={["Home", "Login"]}
            href={["/", "/account/login"]}
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
              {err ? (
                <p className={styles.wrongpu}>Username o Password errati</p>
              ) : (
                <></>
              )}
              <button onClick={login}>Login</button>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Profile;
