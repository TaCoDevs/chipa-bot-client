import React from "react";
import Head from "next/head";

import Search from "./modules/Search";
import styles from "./styles/index.module.scss";
import { useAppContext } from "../../src/common/hooks/Context";
import FourOhOne from "../401";

const App = () => {
  const { user, setUser } = useAppContext()
  const { isLogin, el } = user

  if (!isLogin) return <FourOhOne />

  console.log(el)
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