"use client";

import jsCookie from "js-cookie";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

import { useProfileStore } from "@/utils/useProfileStore";

import Hero from "@/components/Hero";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import Settings from "@/components/account/Settings";
import utils from "@/utils/utils";

const Profile = () => {
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState(false);
  const { setGProfile }: any = useProfileStore();
  const profile = useProfileStore((state: any) => state.profile);

  const router = useRouter();

  const login = async () => {
    if (usr && pwd) {
      const data: any = await fetch(
        `${utils.endpoint}/api/account/authenticate`,
        {
          method: "POST",
          body: JSON.stringify({
            username: usr,
            password: pwd,
          }),
        }
      );

      const response = await data.json();

      if (
        (response && Object.hasOwn(response, "error"), response.error == false)
      ) {
        localStorage.setItem("profile", JSON.stringify(response.user));
        jsCookie.set("lgntkn", response.token, { expires: 14 });

        setGProfile(response.user);
        setErr(false);
      } else {
        setErr(true);
        logout();
      }
    } else {
      setErr(true);
      logout();
    }
  };

  const logout = async () => {
    localStorage.clear();
    jsCookie.remove("lgntkn");
    setGProfile(null);
  };

  useEffect(() => {
    let item = localStorage.getItem("profile");
    let json = item !== null ? JSON.parse(item) : "";
    setErr(false);

    if (json.username) setGProfile(json);
    else setGProfile(null);
  }, []);

  return (
    <main>
      {profile ? (
        <>
          <Hero
            title="Profilo personale"
            crumb={["Home", "Account"]}
            href={["/", "/account"]}
          />
          <div className={styles.account}>
            <div className={styles.image}>
              <Image
                src={`https://mc-heads.net/head/${profile?.username}`}
                fill={true}
                objectFit={"contain"}
                alt=""
              />
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{profile?.username}</p>
              <p className={styles.role}>{profile?.primary_group}</p>
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
          {/*
          <div className={styles.wrapper}>
            <Settings />
          </div>
              */}
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
