"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./Hero.module.scss";

const Hero = (props: any) => {
  const router = useRouter();

  const [current, setCurrent] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    if (
      window.localStorage.getItem("current") &&
      window.localStorage.getItem("previous")
    ) {
      let current = window.localStorage.getItem("current");
      let previous = window.localStorage.getItem("previous");

      // @ts-ignore
      setPrevious(previous?.split(";"));

      // @ts-ignore
      setCurrent(current?.split(";"));
    } else {
      router.push("/");
    }
  }, []);

  return (
    <section className={styles.hero}>
      <h3>{props.title}</h3>
      <p>
        <Link href={previous[0] ? previous[0] : "/"}>{previous[1]}</Link>

        <Link className={styles.active} href={current[0] ? current[0] : "/"}>
          {current[1]}
        </Link>
      </p>
    </section>
  );
};

export default Hero;
