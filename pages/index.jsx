import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import image from "../public/assets/images/chipa-bot.png";
import ChipaButton from "../src/common/containers/components/Button.jsx";
import Context from "../src/common/hooks/Context";

import styles from "../public/styles/pages/index.module.scss";

const Slogan = ({ lang }) => (
  <section className={styles.slogan}>
    <Image className={styles.logo} src={image} alt="chipa-bot" />
    <div className={styles.info}>
      <h2 className="title">{lang.title}</h2>
      <p className="text">{lang.slogan}</p>
    </div>
  </section>
);

const News = ({ lang }) => {
  const { news } = lang;
  return (
    <section className={styles.news}>
      <div className={styles.music}>
        <h1 className="title">{news.music.title}</h1>
        <p className="text"> {news.music.text} </p>
      </div>
      <div className={styles.moderation}>
        <h1 className="title">{news.moderation.title}</h1>
        <p className="text"> {news.moderation.text} </p>
      </div>
      <div className={styles.ui}>
        <h1 className="title">{news.ui.title}</h1>
        <p className="text"> {news.ui.text} </p>
      </div>
    </section>
  );
};

const Add = ({ lang }) => (
  <section className={styles.add}>
    <h3 className="title">{lang.add.title}</h3>
    <ChipaButton isDark={true}>
      <Link href={"/login"}>{lang.add.button}</Link>
    </ChipaButton>
  </section>
);

const App = () => {
  const { theme, stateLang } = Context();
  const { landing } = stateLang;
  return (
    <>
      <Head>
        <title>{landing.title}</title>
      </Head>
      <div className={`${theme} app`}>
        <Slogan lang={landing} />
        <News lang={landing} />
        <Add lang={landing} />
      </div>
    </>
  );
};

export default App;
