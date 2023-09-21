"use client";

import executeQuery from "@/utils/connector";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import utils from "@/utils/utils";

import styles from "./page.module.scss";

import type { NewsPost } from "@/utils/types";

const Post = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<NewsPost>();

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
        crumb={["Home", post?.title ? post.title.substring(0, 12) + "..." : ""]}
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
            <div
              dangerouslySetInnerHTML={{ __html: post?.body ? post?.body : "" }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
