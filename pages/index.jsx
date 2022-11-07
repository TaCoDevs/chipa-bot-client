import React from "react";
import Head from "next/head";
import Image from "next/image";

import Button from "../src/common/containers/components/Button";

import Logo from "../public/assets/images/chipa-bot.png";
import styles from "../public/styles/pages/index.module.scss";

const App = () => {
  return (
    <>
      <Head>
        <title>Chipa-bot</title>
      </Head>
      <div className="app">
        index
      </div>
    </>
  );
};

export default App;
