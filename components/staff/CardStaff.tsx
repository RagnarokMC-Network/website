"use client";

import Image from "next/image";
import styles from "./CardStaff.module.scss";

const CardStaff = (props: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.propic}>
        <Image
          src={`https://mc-heads.net/head/${props.username}`}
          fill={true}
          objectFit={"contain"}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <p className={styles.username}>
          {props.username}
          <br />
          <span className={styles.tag} style={{ backgroundColor: props.color }}>
            {props.tag}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardStaff;
