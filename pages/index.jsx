import React from "react";
import Head from "next/head";
import Image from "next/image";

import Button from "../src/common/containers/components/Button";

import Logo from "../public/assets/images/chipa-bot.png"
import styles from "../public/assets/styles/pages/index.module.scss"

const App = () => {
  return (
    <>
      <Head>
        <title>Chipa-bot</title>
      </Head>
      <div className="app">
        <section className={styles.slogan}>
          <div className={styles.logo}>
            <Image src={Logo} alt=".logo"/>
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>Chipa-bot</h2>
            <p className={styles.text}>La grandeza a tus pies</p>
          </div>
        </section>

        <section className={styles.news}>
          <div className={styles.music}>
            <div className={`${styles.music_info} ${styles.left}`}>
              <h2 className={styles.title}>Musica</h2>
              <p className={styles.text}>
                Un reproductor de música y un motor de busqueda de Youtube
              </p>
            </div>
            <div className={styles.music_img}></div>
          </div>
          <div>
            <div className={styles.music_info}>
              <h2 className={styles.title}>Musica</h2>
              <p className={styles.text}>
                Un reproductor de música y un motor de busqueda de Youtube
              </p>
            </div>
            <div className={styles.music_img}></div>
          </div>
          <div>
            <div className={styles.music_info}>
              <h2 className={styles.title}>Musica</h2>
              <p className={styles.text}>
                Un reproductor de música y un motor de busqueda de Youtube
              </p>
            </div>
            <div className={styles.music_img}></div>
          </div>
        </section>

        <section className={styles.add}>
          <div className={styles.add_container}>
            <h2 className={styles.title}>Una nueva forma de moderar</h2>
            <Button text="Login" theme="dark" href={"/"} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
