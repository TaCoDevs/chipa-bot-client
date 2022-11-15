import React from "react";
import Head from "next/head";

import styles from "./styles/index.module.scss"

const App = () => {
    return (
        <>
        <Head>
            <title>Chipa-bot | Comandos</title>
        </Head>
        <div className={`app`}></div>
        </>
    )
}

export default App