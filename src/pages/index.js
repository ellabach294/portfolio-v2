import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import personalPic from "../../public/images/personal-image.webp"
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import AnimatedJobPosition from "@/components/AnimatedJobPosition";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ella Bach Portfolio</title>
        <meta name="description" content="Ella Bach portfolio website, provided the information about me and my projects showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:p-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full flex justify-center">
            <motion.div 
            initial={{y:0}}
            animate={{
              y: [0, -10, 0],
              transition: {duration: 1.5, repeat: Infinity, ease: "easeInOut"},
            }}
            className="rounded-full w-[70%] md:mb-12"
            style={{boxShadow: "0 0 1.5rem #e9b44b, inset 0 0 1.5rem #e9b44b"}}
            >
              <Image src={personalPic} alt="Ella Bach" className="w-full h-auto rounded-full lg:hidden md:inline-block md:w-full"/>
            </motion.div>
          </div>

          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <h1 className="text-6xl text-gold font-bold mb-6 xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl">Hi, I&apos;m Ella Bach</h1>
            <AnimatedJobPosition />
            <p className="my-4 text-lg lg:text-base font-medium"> Welcome to my tech haven! I&apos;m a passionate coder and recently graduated from the Northern Alberta Institute of Technology with a diploma in Digital Media and IT, focusing on Web Design and Development. Let&apos;s explore the digital world together!</p>

            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/Ella-Bach-Resume.pdf" target={"_blank"} 
                className="flex items-center bg-offWhite text-brown p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-gold hover:text-offWhite border-solid border-2 border-transparent hover:border-gold md:p-2 md:px-4 md:text-base" download={true}>
                  Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link href="mailto:ellabach294@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-gold underline md:text-base"
              >
                Contact
              </Link>
            </div>

          </div>

        </div>

        </Layout>
      </main>
    </>
  );
}
