import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import redesignImage from "../../public/images/redesign/featured-img.png"
import catalogueImage from "../../public/images/catalogue/featured-img.png"
import recipesImage from "../../public/images/recipes/featured-img.png"
import { LinkArrow } from '@/components/Icons'

const Project = ({type, title, summary, img, skill, link }) => {
    return (
        <article className='w-full flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-gold bg-offBlack shadow-2x p-10 relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-offWhite rounded-br-3xl xs:-right-2 sm:h-[101%] xs:w-[100%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" 
                className='w-[40%] cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-[60%] flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-gold font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium lg:!text-base sm:text-sm'>{summary}</p>
                <div className='flex items-center justify-between flex-wrap gap-5 my-2'>
                    {skill.map((item, index) => (
                        <span key={index} className='bg-gold text-offBlack p-2 rounded-lg text-sm'>{item}</span>
                    ))}
                </div>
                <Link href={link} target="_blank" className='mt-2 rounded-lg text-xl font-semibold flex underline hover:text-gold sm:px-4 sm:text-base'>Visit Project <LinkArrow className="w-5 ml-1" /></Link>
            </div>

        </article>
    )
}

const ProjectCard = ({type, title, summary, img, skill, link }) => {
    return (
        <article className='w-full relative flex flex-col items-center justify-between rounded-3xl border border-solid border-gold bg-offBlack shadow-2x p-6 xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-offWhite rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" 
                className='w-[70%] cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className='w-full flex flex-col items-start justify-between pt-6'>
                <span className='text-gold font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium lg:!text-sm'>{summary}</p>
                <div className='flex flex-wrap items-center justify-between gap-6 lg:gap-2 my-2'>
                    {Array.isArray(skill) && skill.map((item, index) => (
                        <span key={index} className='bg-gold text-offBlack p-2 rounded-lg text-sm'>{item}</span>
                    ))}
                </div>
                <Link href={link} target="_blank" className='mt-2 rounded-lg text-xl font-semibold flex items-center underline hover:text-gold lg:!text-base'>Visit Project <LinkArrow className="w-5 ml-1" /></Link>
            </div>

        </article>
    )
}

const Projects = () => {
  return (
    <>
        <Head>
            <title>Ella Bach | Projects Page</title>
            <meta name='description' content="This is the projects that has been designed and developed by Ella Bach" />
        </Head>

        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText  text="Project Highlight: Discovery My Journey through Code" className='lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
                <div className='flex justify-center'>
                    <p className='w-[75%] mt-16 text-lg'>Here&apos;s a snapshot of my journey at NAIT to discover my career path in technology industry! EAch project here has been a stepping stone for my future career as a full-stack developer. I&apos;ve embraced each challenge as a chance to grow and explore my skills. Check them out to see the innovation, though, and care that define my work and my passion!</p>
                </div>
                
                <div className='grid grid-cols-12 gap-24 gap-y-32 mt-16 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <Project 
                            type="UI/UX Design"
                            title="Unsolicited Redesign"
                            img={redesignImage}
                            summary="I redesigned the Boulangerie Loius Marchand & Compagnie website to created a user-friendly, responsive experiences. This project involved developing a landing page and menu page in Adobe Photoshop, focusing on applying CRAP principles and user usability."
                            skill={["Adobe Photoshop", "Procreate", "CRAP Principles"]}
                            link="/projects/redesign"
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <ProjectCard 
                            type="PHP/MySQL"
                            title="Chinese Dramas Catalogue"
                            img={catalogueImage}
                            summary="This PHP/MySQL project catalogs Chinese Dramas,allow user to sign-up, log-in, and secure the CRUD operations. Using the prepared statement and styled with Bootstrap so the application is fully responsive and functional."
                            skill={["HTML", "PHP", "MySQL", "Bootstrap", "Hostinger"]}
                            link="/projects/catalogue"
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ProjectCard 
                            type="UI/UX Design"
                            title="Cooking Recipes Landing Page"
                            img={recipesImage}
                            summary="Created this cooking recipes landing page to solve the problem from the case study. This website wants to increase the engage of the user in the content, improve user experiences through the responsive design."
                            skill={["Figma", "Adobe Photoshop", "Design Sytem", "Design Sprint"]}
                            link="/projects/recipes"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Projects