import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Source_Code_Pro } from "next/font/google"
import Head from "next/head";

const sourcePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${sourcePro.variable} font-source bg-offBlack text-offWhite w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  ) 

}
