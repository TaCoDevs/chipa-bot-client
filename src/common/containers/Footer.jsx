import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../public/styles/containers/Footer.module.scss";
import { Context } from "../hooks/Context";

const Footer = () => {
  const { stateLang, theme, isBlackTheme } = Context();
  const { footer } = stateLang;

  let github, discord;

  if (isBlackTheme) {
    github = require(`../../../public/assets/images/social/github-white.png`);
    discord = require("../../../public/assets/images/social/discord-white.png");
  } else {
    github = require("../../../public/assets/images/social/github-black.png");
    discord = require("../../../public/assets/images/social/discord-black.png");
  }

  return (
    <footer className={`${theme} ${styles.footer}`}>
      <div className={styles.about}>
        <p className="text">{footer.about}</p>
        <hr />
        <div className={styles.devops}>
          <Link href="/devops" className={styles.devops}>
            {footer.devops}
          </Link>
        </div>
      </div>
      <div className={styles.contact}>
        <p className="text">{footer.contact}</p>
        <hr />
        <div className={styles.media}>
          <div className={`${styles.contact_img} ${styles.discord}`}>
            <Link href="https://discord.gg/xXN7nyp8kC">
              <Image
                src={discord.default.src}
                alt=".discord"
                height={80}
                width={80}
              />
            </Link>
          </div>
          <div className={`${styles.contact_img} ${styles.github}`}>
            <Link href="https://github.com/TaCoDevs/chipa-bot">
              <Image
                src={github.default.src}
                width={80}
                height={80}
                alt="..github"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
