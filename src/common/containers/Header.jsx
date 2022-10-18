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
        <Link href={"/"} className="logo-link">
          <a>
            <div className={styles.logo_image}>
              <Image src={src} />
            </div>
            <div className={styles.logo_text}>Chipa-bot</div>
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <Button theme="white" href={"/commands"} text="Commands" />
        <Button theme="white" href={"/player"} text="Music" />
        <Button theme="white" href={"/console"} text="Console" />
        <Button
          theme="white"
          href={"http://26.89.117.213:4000/login"}
          text="Login"
        />
      </div>
      <div id="menu" className={styles.hamburger}>
        <div className={styles.bars} onClick={toggle}>
          <div className={`${styles.bar} ${styles.bar1}`}></div>
          <div className={`${styles.bar} ${styles.bar2}`}></div>
          <div className={`${styles.bar} ${styles.bar3}`}></div>
        </div>
        <ul>{/* Menu */}</ul>
      </div>
    </header>
  );
};

export default Header;
