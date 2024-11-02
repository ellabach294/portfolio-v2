import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

import featured from "../../../public/images/catalogue/featured-img.png"
import directory from "../../../public/images/catalogue/directory.png"
import sql from "../../../public/images/catalogue/sql.png"

import Image from 'next/image'
import Link from 'next/link'

const Catalogue = () => {
  return (
    <>
      <Head>
        <title>Ella Bach | Chinese Drama Catalogue</title>
        <meta name='description' content="This is the project of unsolicited redesign for a bakery shop in Montreal QC" />
      </Head>

      <main>
        <Layout>
          <AnimatedText text="Chinese Drama Catalogue" className='mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>

          <div className='w-full flex flex-col justify-center items-start mx-auto gap-20'>
            <div className='flex lg:flex-col gap-4'>
              <div className='flex flex-col'>
                <section className='flex flex-col gap-4'>
                  <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Overview</h3>
                  <p className='text-lg lg:text-base'>This is the final project for the PHP/MySQL course at NAIT. This project is aiming to create a simple PHP/MySQL application that catalogues a collection of similar items. </p>
                  <p className='text-lg lg:text-base'>Some of requirements for this project:</p>
                  <p className='text-lg lg:text-base'>1. Admin Section which allow users to insert a new item, upload an image, edit an existing item, delete an item. </p>
                  <p className='text-lg lg:text-base'>2. Public Section has the homepage with summary of the project, display design properly, filtering options, search feature, single view, rating and review </p>
                </section>

                <section className='flex flex-col my-6'>
                  <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Skills and Techniques</h3>
                  <ul className='text-lg lg:text-base'>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                  </ul>
                </section>
              </div>          

              <div className='flex flex-col items-center'>
                <Image src={featured} alt='screenshot of the Landing page of the catalogue project.' className='w-[70%] h-auto rounded-lg mt-10' />
                <Link href="https://ellabach.com/portfolio/chinese-drama-catalogue/public/" target='_blank' className='text-md hover:underline hover:bg-offWhite text-offBlack mt-4 px-4 py-2 rounded-md text-lg bg-gold'>Demo</Link>
              </div>
            </div>

            
            <div className='flex flex-col'>
              <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Working Process</h3>

              <div className='my-10'>
                <h4 className='text-2xl lg:text-xl md:text-lg font-semibold'>Planning</h4>
                <p className='text-lg lg:text-base'>In order to obtain this project, I have to come up with the proper plan to make the process smooth. First of all, I select the topic of Chinese Drama Collection and built fully in PHP and store the data information in the database through phpMyAdmin. Each drama entry includes the drama title, realease year, number of episodes, categories, original network, director of the drama, main cast, brief description, user review and rating.</p>
              </div>

              <div className='mt-10'>
                <h4 className='text-2xl lg:text-xl md:text-lg font-semibold'>Add-on Challenge for this Project</h4>
                <ul className='text-lg lg:text-base'>
                  <li>1. Custom challenges: create the rating and review function</li>
                  <li>2. Highligh Funfacts on the homepage related to different drama and display randomly.</li>
                  <li>3. Profile Photo for User</li>
                </ul>
              </div>

              <div className='mt-10'>
                <div className='w-full my-10 flex lg:flex-col lg:items-center  gap-6'>
                  <section className='w-[60%] lg:w-full flex flex-col gap-6'>
                    <h4 className='text-2xl lg:text-xl md:text-lg font-semibold'>Page Directory Structure</h4>
                    <p className='text-lg lg:text-base'>The page directory structure is divided into two sections: public and private. The private section stores processes and admin functions to protect files from public access. This section includes functions that users can access within the application, such as adding forms, editing forms, form validation, login processes, rating processes, and secure database connections using prepared statements. Also, the admin panel which allows register using the function of add item, edit item, delete and hashed password.</p>

                    <p className='text-lg lg:text-base'>The public section contains files for each page that users can access, styled using Bootstrap for a cohesive look. It also includes functions that allow users to filter and search data. This project is fully responsive.</p>
                  </section>
                  <Image src={directory} alt='Website directory structure' className='w-[30%] lg:w-[50%] h-auto rounded-md'/>
                </div>

                <div className='w-full my-10 flex lg:flex-col lg:items-center gap-6'>
                  <Image src={sql} alt='Website sql structure' className='w-[30%] lg:w-[50%] lg:order-last h-auto rounded-md'/>
                  <div className='flex flex-col gap-6'>
                    <h4 className='text-2xl lg:text-xl md:text-lg font-semibold'>Database Structure</h4>
                    <p className='text-lg lg:text-base'>This is the database structure used to insert data into phpMyAdmin. Each data table includes a primary key and, where necessary, a foreign key to establish relationships between tables. This setup allows for efficient retrieval of user reviews and ratings by connecting relevant tables.</p>
                    <p className='text-lg lg:text-base'>To design the table structure, I first needed to identify the types of information I wanted to display and store in the database to meet the project requirements. Three main tables are essential: the Drama Catalogue table, which organizes details about each drama; the Catalogue Admin table, which stores registered user information; and the User Rating table, which captures user-submitted ratings and reviews.</p>
                  </div>
                </div>
              </div>

              <div className='flex flex-col'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Final Thought</h3>
                <p className='text-lg lg:text-base'>This project has been rewarding experience that strengthened my skills in full-stack web development. Understand deepen the knowledge of building a structured database, designing user-friendly forms, and implementing secure access control. This project not only demontrates my ability to design and develop a responsive and interactive application but also highlights my understanding in PHP, MySQL, and database management.</p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Catalogue