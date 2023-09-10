"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import jsCookie from "js-cookie";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  let [active, setActive] = useState("/");
  let [previous, setPrevious] = useState("/");
  const [profile, setProfile]: any = useState({});

  let endpoints = [
    { path: "/", title: "Home", desc: "" },
    { path: "/regolamento", title: "Regole", desc: "" },
    { path: "/staff", title: "Staff", desc: "" },
    { path: "https://store.ragnarokmc.it/", title: "Negozio", desc: "" },
    {
      path: "https://minecraft-italia.net/lista/server/ragnarokmc.it",
      title: "Votaci",
      desc: "",
    },
    { path: "/account", title: "Account", desc: "" },
  ];

  useEffect(() => {
    let local = window.localStorage.getItem("current")?.split(";")[0];

    let token = jsCookie.get("lgntkn");
    let item = window.localStorage.getItem("profile");

    if (!token) {
      window.localStorage.removeItem("profile");
      setProfile(null);
    } else if (!item) {
      jsCookie.remove("lgntkn");
      setProfile(null);
    } else {
      let json = JSON.parse(item);

      if (json.username) {
        setProfile(json);
      } else {
        setProfile(null);
        jsCookie.remove("lgntkn");
        window.localStorage.removeItem("profile");
      }
    }

    if (local == pathname) {
      local = "/";
    }

    let ePrevious = endpoints.find((p) => p.path == local);
    window.localStorage.setItem(
      "previous",
      `${ePrevious?.path};${ePrevious?.title};${ePrevious?.desc}`
    );

    let eCurrent = endpoints.find((p) => p.path == pathname);
    window.localStorage.setItem(
      "current",
      `${eCurrent?.path};${eCurrent?.title};${eCurrent?.desc}`
    );

    // @ts-ignore
    setActive(eCurrent?.path);

    // @ts-ignore
    setPrevious(ePrevious?.path);
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_wrapper}>
        <div className={styles.logo_cnt}>
          <Image
            src="/logo.webp"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h3>RagnarokMC</h3>
        </div>
        <p>
          Apertura 10/09 ore 15:00!
          <br />
          <Link
            href="https://www.youtube.com/watch?v=M8v404e6D6k"
            target="_blank"
          >
            TRAILER
          </Link>
        </p>
      </div>
      <div className={styles.links_cnt}>
        <ul>
          {endpoints.map((el, i) =>
            profile && profile.username && el.path == "/accountt" ? (
              <li>
                <Image
                  src={`https://mc-heads.net/head/${profile?.username}`}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
              </li>
            ) : (
              <li
                key={i}
                className={`${active == el.path ? styles.active : ""}`}
              >
                <Link href={el.path}>{el.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
