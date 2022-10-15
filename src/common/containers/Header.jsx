import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./components/Button";

import styles from "../../../public/assets/styles/containers/Header.module.scss";
import src from "../../../public/assets/images/chipa-bot.png";

const Logo = () => {
  return (
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
  );
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Button theme="white" href={"/logn"} text="CACA" />
      <Button theme="white" href={"/logn"} text="CACA" />
      <Button theme="white" href={"/logn"} text="CACA" />
      <Button theme="white" href={"/logn"} text="CACA" />
      <Button theme="white" href={"/logn"} text="CACA" />
    </div>
  );
};

const Hambuerger = () => {
  function toggle() {
    const menu = document.getElementById("menu");
    menu.classList.toggle(styles.open);
  }

  return (
    <div id="menu" className={styles.hamburger}>
      <div className={styles.bars} onClick={toggle}>
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>
      <ul>{/* Menu */}</ul>
    </div>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Hambuerger />
    </header>
  );
};

export default Header;
