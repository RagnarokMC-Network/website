import Image from "next/image";

import { FiUser, FiFolder, FiArrowRight } from "react-icons/fi";

import styles from "./CardNews.module.scss";

type NewsProp = {
  src: string;
  date: string;
  title: string;
  author: string;
  tag: string;
};

const CardNews = (props: NewsProp) => {
  return (
    <div className={styles.card}>
      <div className={styles.propic}>
        <Image
          src={props.src}
          objectFit={"cover"}
          fill={true}
          alt="Picture of the author"
        />
        <div className={styles.date}>{props.date}</div>
      </div>
      <div className={styles.body}>
        <h4>{props.title}</h4>
        <div className={styles.info}>
          <p>
            <FiUser />
            {props.author}
          </p>
          <p>
            <FiFolder />
            {props.tag}
          </p>
        </div>
        <div className={styles.more}>
          <p>Leggi di più</p>
          <FiArrowRight />
        </div>
      </div>
    </div>
  );
};

export default CardNews;
