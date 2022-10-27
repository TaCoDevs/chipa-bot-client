import React from "react";
import Head from "next/head";

import styles from "../../public/assets/styles/pages/console/index.module.scss";

const App = () => {
  return (
    <>
    <Head>
      <title>ChipaBot | Consola</title>
    </Head>
      <div className="app">
        <section>
          <div className={styles.menu}>
            <div className={`${styles.buttons} ${styles.close}`}></div>
            <div className={`${styles.buttons} ${styles.minimize}`}></div>
            <div className={`${styles.buttons} ${styles.zoom}`}></div>
          </div>

          <div className={styles.screen}>Content</div>
        </section>
      </div>
    </>
  );
};

export default App;
