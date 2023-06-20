"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

import { notification, Space } from "antd";
import SectionDescriptor from "@/components/home/SectionDescriptor";
import CardNews from "@/components/home/CardNews";
import CardMod from "@/components/home/CardMod";

type NotificationType = "success" | "info" | "warning" | "error";

import styles from "./page.module.scss";

const Home = () => {
  const [pCount, setPCount] = useState(0);

  useEffect(() => {
    fetch("https://api.mcsrvstat.us/2/ragnarokmc.it")
      .then((data) => data.json())
      .then((json) => {
        if (json) {
          setPCount(json.players.online);
          console.log(json);
        } else {
          setPCount(Math.floor(Math.random() * (60 - 15 + 1) + 15));
        }
      });
  }, []);

  const scroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [api, contextHolder] = notification.useNotification();

  const copyIp = (type: NotificationType, message: string) => {
    navigator.clipboard.writeText("ragnarokmc.it");
    api[type]({
      message,
      placement: "bottomRight",
    });
  };

  return (
    <>
      {contextHolder}
      <main>
        <section className={styles.cover}>
          <h1>
            Benvenuto su
            <br />
            RagnarokMC
          </h1>
          <Image
            src="/zap.svg"
            width={325}
            height={16}
            className={styles.zap}
            alt="Picture of the author"
          />
          <p>
            RagnarokMC è un server minecraft, con l'obbiettivo di creare e
            fornire meccaniche di gioco innovative e garantire un game play
            bello ed entusiasmante, cosa aspetti?
            <br />
            <span>
              Unisciti ad altri <b>{pCount}</b> giocatori online!
            </span>
          </p>

          <button onClick={() => copyIp("success", "IP Copiato!")}>
            COPIA IP
          </button>

          <Image
            src="/arrow.svg"
            width={30}
            height={60}
            alt="Picture of the author"
            onClick={scroll}
            className={styles.scroll}
          />
        </section>
        <section id="section-1" className={styles.section}>
          <SectionDescriptor
            title="Modalità"
            description="Visualizza un piccolo assaggio di quello che abbiamo da offrire,
                modalità e meccaniche dalle più classiche alle più innovative"
          />
          <div className={styles.modContainer}>
            <CardMod
              title="Survival"
              description="La modalità di Minecraft, una soppravvivenza pura, sei pronto a vivere questa esperienza assieme ai tuoi amici o con altre persone?"
              src="/survival.jpg"
              alternate={true}
            />
            <CardMod
              title="Towny"
              description="Una delle modalità di forza del nostro network, prova le meccaniche totalmente nuove e innovative, soppravvivenza in compagnia, ma sei sicuro di essere al sicuro? costruisci la tua Town recluta altre persone e diventa il migliore!"
              src="/towny.jpg"
              alternate={false}
            />
          </div>
        </section>
        <section id="section-2" className={styles.section}>
          <SectionDescriptor
            title="Annunci"
            description="Leggi gli ultimi annunci e novità che riguardano il nostro network e non perderti nessun evento!"
          />

          <div className={styles.newsContainer}>
            <CardNews
              title="Nuovo aggiornamento!"
              author="Naoko__"
              tag="Minecraft"
              date="2 MAGGIO"
              src="/news/update.jpg"
            />

            <CardNews
              title="Evento PVP"
              author="Fabio10elode"
              tag="Minecraft"
              date="24 MARZO"
              src="/news/pvp.jpg"
            />

            <CardNews
              title="Nuovo server Discord"
              author="Shawn1865"
              tag="Discord"
              date="12 FEBBRAIO"
              src="/news/discord.jpg"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
