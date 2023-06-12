"use client";

import Image from "next/image";

import { FaDiscord, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
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
              <FaDiscord />
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
            <li>Home</li>
            <br />
            <li>Guida</li>
            <br />
            <li>Votaci</li>
            <br />
            <li>Cookie e privacy</li>
          </ul>
        </div>
        <div>
          <p>Modalità</p>
          <ul>
            <li>Towny</li>
            <br />
            <li>Survival</li>
          </ul>
        </div>
        <div>
          <p>Regolamento</p>
          <ul>
            <li>Generale</li>
            <br />
            <li>Account e servizi</li>
            <br />
            <li>Chat e altro</li>
            <br />
            <li>Discord</li>
          </ul>
        </div>
        <div>
          <p>Negozio</p>
          <ul>
            <li>VIP - Towny</li>
            <br />
            <li>VIP - Survival</li>
            <br />
            <li>Donazione libera</li>
            <br />
            <li>Rimozione ban</li>
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
