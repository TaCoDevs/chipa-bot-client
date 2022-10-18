import "../public/assets/styles/global.scss"
import "normalize.css"

import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "../src/common/containers/Header"
import Footer from "../src/common/containers/Footer"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}