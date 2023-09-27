import Image from "next/image";
import Link from "next/link";

import { FiUser, FiFolder, FiArrowRight, FiEdit } from "react-icons/fi";
import { useProfileStore } from "@/utils/useProfileStore";
import utils from "@/utils/utils";

import styles from "./CardNews.module.scss";

import type { NewsPost, UserProfile } from "@/utils/types";

const CardNews = (props: any) => {
  const profile: UserProfile = useProfileStore((state: any) => state.profile);

  return (
    <div className={styles.card}>
      {utils.isStaffer() ? (
        <Link href={"/news/edit/" + props.post.annunci_id}>
          <FiEdit className={styles.edit} />
        </Link>
      ) : (
        <></>
      )}

      <div className={styles.propic}>
        <Image
          src={props.post.images ? props.post.images : "/background.webp"}
          objectFit={"cover"}
          fill={true}
          alt="Picture of the author"
        />
        <div className={styles.date}>
          {new Date(props.post.creation_date).toLocaleDateString("it-IT")}
        </div>
      </div>
      <div className={styles.body}>
        <h4>{props.post.title}</h4>
        <div className={styles.info}>
          <p>
            <FiUser />
            {props.post.author}
          </p>
          <p>
            <FiFolder />
            {props.post.tag}
          </p>
        </div>
        {props.post.body != null &&
        props.post.body != "" &&
        props.post.body != undefined ? (
          <div className={styles.more}>
            <Link href={"/news/" + props.post.annunci_id}>
              <p>Leggi di più</p>
            </Link>
            <FiArrowRight />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CardNews;
