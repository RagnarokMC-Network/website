"use client";

import { useState, useEffect } from "react";
import { MdEditor } from "md-editor-rt";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/utils/useProfileStore";
import utils from "@/utils/utils";
import Hero from "@/components/Hero";

import styles from "./page.module.scss";
import "md-editor-rt/lib/style.css";

import type { UserProfile } from "@/utils/types";

const CreateNews = () => {
  const [immagine, setImmagine] = useState(null);
  const [titolo, setTitolo] = useState("");
  const [contenuto, setContenuto] = useState("");
  const [text, setText] = useState("# Hello Editor");

  const { setGProfile }: any = useProfileStore();
  const profile: UserProfile = useProfileStore((state: any) => state.profile);

  const router = useRouter();

  useEffect(() => {
    if (!utils.isStaffer()) {
      router.push("/");
    }
  });

  const onSubmit = () => {
    let date = new Date();

    console.log(text);

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

    if (!titolo) return;

    if (!profile.username) return;

    fetch(`${utils.endpoint}/api/news/posts`, {
      method: "POST",
      body: JSON.stringify({
        creation_date: dateStr,
        title: titolo,
        body: contenuto,
        author: profile.username,
        tag: "Minecraft",
        image: immagine,
      }),
    });

    router.push("/");
  };

  const convertBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <main>
      <Hero
        title="Nuovo Post"
        crumb={["Home", "Nuovo Post"]}
        href={["/", "/news/create"]}
      />

      <div className={styles.wrapper}>
        <input
          className={styles.image}
          onChange={async (event) => {
            if (
              event.target.files?.length != undefined &&
              event.target.files?.length > 0
            ) {
              const upFile = event.target.files[0];

              let base64: any = await convertBase64(upFile);
              setImmagine(base64);
            }
          }}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />
        <input
          onChange={(event) => setTitolo(event.target.value)}
          className={styles.input}
          type="text"
          placeholder="Titolo"
        />
        <MdEditor
          language="en-US"
          modelValue={contenuto}
          onChange={setContenuto}
          theme="dark"
        />
        <button onClick={onSubmit}>Crea</button>
      </div>
    </main>
  );
};

export default CreateNews;
