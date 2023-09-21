"use client";

import executeQuery from "@/utils/connector";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import utils from "@/utils/utils";

import styles from "./page.module.scss";

const Post = ({ params }: { params: { id: number } }) => {
  const [post, setPost]: any = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch(`${utils.endpoint}/api/news/posts?postId=${params.id}`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json);
        });
    }
  }, []);

  return (
    <main>
      <Hero
        title={post?.title ? post.title : ""}
        crumb={["Home", "News"]}
        href={["/", "/news/" + params.id]}
      />

      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              src={post?.images ? post?.images : "/background.webp"}
              objectFit={"cover"}
              fill={true}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.text}>
            <div dangerouslySetInnerHTML={{ __html: post?.body }}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
