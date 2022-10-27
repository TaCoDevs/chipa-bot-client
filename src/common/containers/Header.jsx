/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./components/Button";

import styles from "../../../public/assets/styles/containers/Header.module.scss";
import src from "../../../public/assets/images/chipa-bot.png";

function toggle() {
  const menu = document.getElementById("menu");
  menu.classList.toggle(styles.open);
}

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <div className={styles.logo_image}>
            <Image src={src} alt=".chipa-bot logo" />
          </div>
          <div className={styles.logo_text}>Chipa-bot</div>
        </a>
      </div>
      <div className={styles.nav}>
        <Button theme="white" href={"/commands"} text="Comandos" />
        <Button theme="white" href={"/player"} text="Reproductor" />
        <Button theme="white" href={"/console"} text="Consola" />
        <Button theme="white" href={"/options"} text="Opciones" />
        <Button
          theme="white"
          href={"http://26.89.117.213:4000/login"}
          text="Iniciar sesión"
        />
      </div>
      <div id="menu" className={styles.hamburger}>
        <div className={styles.bars} onClick={toggle}>
          <div className={`${styles.bar} ${styles.bar1}`}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
          <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
        <ul className={styles.mobile_menu}>
          <div>logo</div>
          <Link href={"/commands"}>Comandos</Link>
          <Link href={"/player"}>Reproductor</Link>
          <Link href={"/console"}>Consola</Link>
          <Link href={"/options"}>Opciones</Link>
          <Link href={"http://26.89.117.213:4000/login"}>Iniciar sesión</Link>
        </ul>
      </div>
    </header>
  );
};

// 140456957607

export default Header;
