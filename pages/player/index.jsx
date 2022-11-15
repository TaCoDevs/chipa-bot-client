import React from "react";
import Head from "next/head";

import Search from "./modules/Search";
import styles from "./styles/index.module.scss";

// const API = "http://26.89.117.213:4000/api/search/name";

const App = () => {
  return (
    <div>
      <Head>
        <title>Chipa-bot | Reproductor</title>
      </Head>
      <Search />
    </div>
  )
}

export default App