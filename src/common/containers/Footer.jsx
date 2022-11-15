import React from "react";
import Image from "next/image";
import Link from "next/link";

import discord_dark from "../../../public/assets/images/social/discord-dark.png";
import github_dark from "../../../public/assets/images/social/github-dark.png";

import styles from "../../../public/styles/containers/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <p>Acerca de</p>
        <hr />
        <div className={styles.devops}>
          <Link href="/devops" className={styles.devops}>
            desarrolladores
          </Link>
        </div>
      </div>
      <div className={styles.contact}>
        <p>Contacto</p>
        <hr />
        <div className={styles.media}>
          <div className={`${styles.contact_img} ${styles.discord}`}>
            <Link href="https://discord.gg/xXN7nyp8kC">
              <Image src={discord_dark} alt=".discord_dark"/>
            </Link>
          </div>
          <div className={`${styles.contact_img} ${styles.github}`}>
            <Link href="https://github.com/TaCoDevs/chipa-bot">
              <Image src={github_dark} alt=".git_dark"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
