"use client";

import executeQuery from "@/utils/connector";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CardNews from "@/components/home/CardNews";
import utils from "@/utils/utils";

import styles from "./page.module.scss";

import type { NewsPost } from "@/utils/types";

const Post = () => {
  const [posts, setPosts] = useState<NewsPost[]>();

  useEffect(() => {
    fetch(`${utils.endpoint}/api/news/posts`)
      .then((res) => res.json())
      .then((json) => {
        let sorted = json.sort(Compare);
        setPosts(sorted);
      });
  }, []);

  const Compare = (a: NewsPost, b: NewsPost) => {
    if (
      a.last_modification_date
        ? a.last_modification_date
        : a.creation_date < b.last_modification_date
        ? b.last_modification_date
        : b.creation_date
    ) {
      return -1;
    }
    if (
      a.last_modification_date
        ? a.last_modification_date
        : a.creation_date > b.last_modification_date
        ? b.last_modification_date
        : b.creation_date
    ) {
      return 1;
    }
    return 0;
  };

  return (
    <main>
      <div className={styles.newsContainer}>
        {posts?.map((el: NewsPost, i: number) => {
          if (i > 5) return;
          return <CardNews key={i} post={el} />;
        })}
      </div>
    </main>
  );
};

export default Post;
