import Head from "next/head"

import "../public/styles/global.scss"
import "normalize.css"

import Header from "../src/common/containers/Header"
import Footer from "../src/common/containers/Footer"

import { AppContextProvider } from "../src/common/hooks/Context"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://i.imgur.com/0KvOXjK.png" type="image/x-icon" />
            </Head>
            <AppContextProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AppContextProvider>
        </>
    )
}
