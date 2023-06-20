"use client";

import Link from "next/link";
import Image from "next/image";

import { FaDiscord, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos}>
        <div className={styles.first}>
          <h4>RAGNAROKMC</h4>
          <p>Minecraft network</p>
          <p>
            <span>Ip Java:</span> ragnarokmc.it
          </p>
          <p>
            <span>Email:</span> supporto@ragnarokmc.it
          </p>

          <ul className={styles.social}>
            <li>
              <Link href="https://discord.gg/8MMXHeT8Vm" target="_blank">
                <FaDiscord />
              </Link>
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaTelegram />
            </li>
          </ul>
        </div>
        <div>
          <p>Link Utili</p>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <br />
            <li>
              <Link href={"/"}>Guida</Link>
            </li>
            <br />
            <li>
              <Link href={"/"}>Votaci</Link>
            </li>
            <br />
            <li>
              <Link href={"/"}>Cookie e privacy</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Modalità</p>
          <ul>
            <li>
              <Link href={"/"}>Towny</Link>
            </li>
            <br />
            <li>
              <Link href={"/"}>Survival</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Regolamento</p>
          <ul>
            <li>
              <Link href={"/regolamento?section=generale"}>Generale</Link>
            </li>
            <br />
            <li>
              <Link href={"/regolamento?section=account"}>
                Account e servizi
              </Link>
            </li>
            <br />
            <li>
              <Link href={"/regolamento?section=chat"}>Chat e altro</Link>
            </li>
            <br />
            <li>
              <Link href={"/regolamento?section=discord"}>Discord</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Negozio</p>
          <ul>
            <li>
              <Link href={"https://store.ragnarokmc.it/category/towny-vip"}>
                VIP - Towny
              </Link>
            </li>
            <br />
            <li>
              <Link href={"https://store.ragnarokmc.it/category/vip"}>
                VIP - Survival
              </Link>
            </li>
            <br />
            <li>
              <Link href={"https://store.ragnarokmc.it/category/donazione"}>
                Donazione libera
              </Link>
            </li>
            <br />
            <li>
              <Link href={"/"}>Rimozione ban</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>
          © Copyright 2023 <span>RagnarokMC Network</span>. Tutti i diritti sono
          riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
