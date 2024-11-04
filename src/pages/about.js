import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import signature from "../../public/images/signature.png"
import profileImage from "../../public/images/heashot-1.png"
import Skills from '@/components/Skills'
import Experiences from '@/components/Experiences'
import Educations from '@/components/Educations'
import VolunteersHobbies from '@/components/VolunteersHobbies'

const About = () => {
  return (
    <>
        <Head>
            <title>Ella Bach | About Page</title>
            <meta name='description' content="This is the about page of Ella Bach with provide the information about background, skills, experiences and education" />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className="pt-16">
                <AnimatedText text="My Journey in Web Development" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-6 xl:col-span-8 flex flex-col items-start justify-start mx-20 mt-10'>
                        <h3 className='mb-4 lg:text-xl text-2xl font-bold uppercase text-gold'>All About Me</h3>
                        <p className='font-medium text-lg lg:text-base'>Hello and welcome to my tech haven! </p>
                        <p className='my-4 font-medium text-lg lg:text-base'>My name is Ella Bach, and I am a web design and development student at NAIT, working towards a career as a full-stack developer. I am currently on the Dean&apos;s Honour List with a GPA of 4.0. I bring to my work a combination of technical expertise and customer-focused experience.  </p>
                        <p className='my-4 font-medium text-lg lg:text-base'>I was born and raised in Ho Chi Minh City, Vietnam, and migrated to Australia when I was 17, starting my path of self-discovery and development. I obtained a Bachelor of Arts in Hospitality and Tourism Management and worked in customer service for almost ten years, especially enjoying my role as a corporate travel agent.</p>
                        <p className='my-4 font-medium text-lg lg:text-base'>Moved to Vancouver in 2017 and continues my career path in the hospitality industry, I enrolled in the Post-Graduate diploma in Hospitality Marketing at Douglas College. However, the challenges of the COVID-19 pandemic brought unexpected barriers for job hunting, and it motivated me to shift my focus. As a person who loves to learn new things and explore different path, I began self-learning design and coding, create a WordPress site to start selling my DIY Supplies, Figure Toys, and Custom Stickers. In 2021, I made the decision to further my technology skills by enrolling in NAIT&apos;s Digital Media and IT with Web Design and Development Concentration. The more I study the world of technology, the more I realize how strong it is and I need to keep learning to keep up with global innovation.</p>
                        <p className='my-4 font-medium text-lg lg:text-base'>Join me on this exciting journey in coding, where each project brings fresh ideas to life. Let&apos;s innovate together and create something extraordinary! </p>
                        <Image src={signature} alt='Ella Bach signature' width={200} height={200} className="filter invert"/>
                    </div>

                    <div className='col-start-7 col-end-9 xl:col-span-8 xl:w-[50%] mt-10 relative h-max rounded-2xl border-2 border-solid border-gold p-4 justify-self-center' style={{boxShadow: "0 0 1.5rem #e9b44b, inset 0 0 1.5rem #e9b44b"}}>
                        <Image  src={profileImage} alt='Ella Bach profile image' className='w-full h-auto rounded-2xl' priority={true} />
                    </div>
                </div>

                <Skills />
                <Experiences />
                <Educations />
                <VolunteersHobbies />
            </Layout>
        </main>
    </>
  )
}

export default About