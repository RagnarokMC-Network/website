"use client";

import executeQuery from "@/utils/connector";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdPreview, MdCatalog } from "md-editor-rt";
import Hero from "@/components/Hero";
import utils from "@/utils/utils";

import "md-editor-rt/lib/preview.css";
import styles from "./page.module.scss";

import type { NewsPost } from "@/utils/types";

const Post = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<NewsPost>();
  const [text] = useState("# Hello Editor");
  const [id] = useState("preview-only");

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
            <div>
              <MdPreview
                language="en-US"
                theme="dark"
                editorId={id}
                modelValue={post?.body ? post?.body : ""}
              />
              <MdCatalog editorId={id} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Post;
