import React from "react";
import Image from "next/image";
import Link from "next/link";

import discord_dark from "../../../public/assets/images/social/discord-dark.png";
import github_dark from "../../../public/assets/images/social/github-dark.png";

import styles from "../../../public/assets/styles/containers/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <p>Acerca de</p>
        <hr />
        <div className={styles.devs}>
          <Link href="/devs">
            <a className={styles.devs}>desarrolladores</a>
          </Link>
        </div>
      </div>
      <div className={styles.contact}>
        <p>Contacto</p>
        <hr />
        <div className={styles.media}>
          <div className={`${styles.contact_img} ${styles.discord}`}>
            <Link href="https://discord.gg/xXN7nyp8kC">
              <a>
                <Image src={discord_dark} />
              </a>
            </Link>
          </div>
          <div className={`${styles.contact_img} ${styles.github}`}>
            <Link href="https://github.com/TaCoDevs/chipa-bot">
              <a>
                <Image src={github_dark} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
