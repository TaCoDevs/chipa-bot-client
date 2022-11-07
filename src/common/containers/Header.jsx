import React from "react";
import Image from "next/image";
import Link from "next/link";

import ChipaButton from "./components/Button";
import ChipaLink from "./components/Link";

import styles from "../../../public/styles/containers/Header.module.scss";
import src from "../../../public/assets/images/chipa-bot.png";

function toggle() {
  const menu = document.getElementById("menu");
  menu.classList.toggle(styles.open);
}

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>
          <div className={styles.logo_image}>
            <Image src={src} alt=".chipa-bot logo" priority />
          </div>
          <div className={styles.logo_text}>Chipa-bot</div>
        </Link>
      </div>
      <div className={styles.nav}>
        <ChipaLink href="/commands">Comandos</ChipaLink>
        <ChipaLink href="/player">Reproductor</ChipaLink>
        <ChipaLink href="/console">Consola</ChipaLink>
        <ChipaLink href="/options">Opciones</ChipaLink>
        <ChipaButton>
          <Link href="http://26.89.117.213:4000/login">Login</Link>
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
          <ChipaLink href="/commands">Comandos</ChipaLink>
          <ChipaLink href="/player">Reproductor</ChipaLink>
          <ChipaLink href="/console">Consola</ChipaLink>
          <ChipaLink href="/options">Opciones</ChipaLink>
          <ChipaLink href="http://26.89.117.213:4000/login">Login</ChipaLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
