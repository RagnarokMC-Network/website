"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const pathname = usePathname();
  let [active, setActive] = useState("/");
  let [previous, setPrevious] = useState("/");

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
    //{ path: "/account", title: "Account", desc: "" },
  ];

  useEffect(() => {
    let local = window.localStorage.getItem("current")?.split(";")[0];

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
    <nav>
      <div className={styles.logo_cnt}>
        <Image
          src="/logo.webp"
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <h3>RagnarokMC</h3>
      </div>
      <div className={styles.links_cnt}>
        <ul>
          {endpoints.map((el, i) => (
            <li key={i} className={`${active == el.path ? styles.active : ""}`}>
              <Link href={el.path}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
