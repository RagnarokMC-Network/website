"use client";

import executeQuery from "@/utils/connector";
import utils from "@/utils/utils";
import { useState, useEffect } from "react";
import { MdEditor } from "md-editor-rt";
import { useRouter } from "next/navigation";
import { FiTrash } from "react-icons/fi";
import Hero from "@/components/Hero";

import "md-editor-rt/lib/style.css";
import styles from "./page.module.scss";

import type { NewsPost } from "@/utils/types";

const EditNews = ({ params }: { params: { id: number } }) => {
  const [post, setPost] = useState<NewsPost>();
  const [contenuto, setContenuto] = useState("");
  const [postId, setPostId] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    if (!utils.isStaffer()) {
      router.push("/");
      return;
    }

    if (params.id) {
      fetch(`${utils.endpoint}/api/news/posts?postId=${params.id}`)
        .then((res) => res.json())
        .then((json) => {
          setPost(json);
        });

      setPostId(params.id);
    }
  }, []);

  const deletePost = () => {
    if (!utils.isStaffer()) {
      router.push("/");
      return;
    }

    if (!window.confirm("Sicuro di voler eliminare il post?")) return;

    fetch(`${utils.endpoint}/api/news/posts?postId=${postId}`, {
      method: "DELETE",
    });

    router.push("/");
  };

  const cancel = () => {
    router.push("/");
  };

  const updatePost = () => {
    if (!utils.isStaffer()) {
      router.push("/");
      return;
    }

    let date = new Date();

    let dateStr =
      date.getUTCFullYear() +
      "-" +
      date.getUTCMonth() +
      "-" +
      date.getUTCDate() +
      " " +
      date.getUTCHours() +
      ":" +
      date.getUTCMinutes() +
      ":" +
      date.getUTCSeconds();

    if (!contenuto) return;

    fetch(`${utils.endpoint}/api/news/posts`, {
      method: "PUT",
      body: JSON.stringify({
        id: postId,
        body: contenuto,
        last_modification_date: dateStr,
      }),
    });

    router.push("/");
  };

  return (
    <main>
      <Hero
        title="Modifica Post"
        crumb={["Home", "Modifica Post"]}
        href={["/", "/news"]}
      />

      <div className={styles.wrapper}>
        <MdEditor
          language="en-US"
          modelValue={post?.body ? post.body : ""}
          onChange={setContenuto}
          theme="dark"
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={updatePost} type="submit">
          AGGIORNA
        </button>
        <button type="reset" onClick={deletePost}>
          <FiTrash />
        </button>
        <button type="button" onClick={cancel}>
          ANNULLA
        </button>
      </div>
    </main>
  );
};

export default EditNews;
