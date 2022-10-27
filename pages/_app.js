import Head from "next/head"

import "../public/assets/styles/global.scss"
import "normalize.css"

import Header from "../src/common/containers/Header"
import Footer from "../src/common/containers/Footer"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="https://i.imgur.com/0KvOXjK.png" type="image/x-icon" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
