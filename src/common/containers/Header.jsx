import React from "react";
import Image from "next/image";
import Link from "next/link";

import ChipaButton from "./components/Button";
import ChipaLink from "./components/Link";

import styles from "../../../public/styles/containers/Header.module.scss";
import src from "../../../public/assets/images/chipa-bot.png";
import { Context } from "../hooks/Context";

function toggle() {
  const menu = document.getElementById("menu");
  menu.classList.toggle(styles.open);
}

const Header = () => {
  const { stateLang, theme, isBlackTheme } = Context()
  const { header } = stateLang

  return (
    <header className={`${theme} ${styles.header}`}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <div className={styles.logo_image}>
            <Image src={src} alt=".chipa-bot logo" priority />
          </div>
          <div className={`title ${styles.logo_text}`}>Chipa-bot</div>
        </Link>
      </div>
      <div className={styles.nav}>
        <ChipaLink isDark={isBlackTheme} href="/commands">{ header.commands }</ChipaLink>
        <ChipaLink isDark={isBlackTheme} href="/player">{ header.music }</ChipaLink>
        <ChipaLink isDark={isBlackTheme} href="/console">{ header.console }</ChipaLink>
        <ChipaLink isDark={isBlackTheme} href="/options">{ header.options }</ChipaLink>
        <ChipaButton isDark={isBlackTheme}>
          <Link href="/login">{ header.login }</Link>
        </ChipaButton>
      </div>
      <div id="menu" className={styles.hamburger}>
        <div className={styles.bars} onClick={toggle}>
          <div className={`${styles.bar} ${styles.bar1}`}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
          <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
        <ul className={styles.mobile_menu}>
          <div>logo</div>
          <ChipaLink href="/commands">{ header.commands }</ChipaLink>
          <ChipaLink href="/player">{ header.music }</ChipaLink>
          <ChipaLink href="/console">{ header.console }</ChipaLink>
          <ChipaLink href="/options">{ header.options }</ChipaLink>
          <ChipaLink href="http://26.89.117.213:4000/login">{ header.login }</ChipaLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
