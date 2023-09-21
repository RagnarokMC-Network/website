"use client";

import executeQuery from "@/utils/connector";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import utils from "@/utils/utils";

//import styles from "./page.module.scss";

import type { NewsPost } from "@/utils/types";

const Post = () => {
  const [posts, setPosts] = useState<NewsPost[]>();

  useEffect(() => {
    fetch(`${utils.endpoint}/api/news/posts`)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  return <main></main>;
};

export default Post;
