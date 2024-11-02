import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'

import desktop from "../../../public/images/recipes/featured-img.png"
import mobile from "../../../public/images/recipes/landing-page-mobile.png"
import desktopWireframe from "../../../public/images/recipes/desktop-wireframe.png"
import mobileWireframe from "../../../public/images/recipes/mobile-wireframe.png"
import storyboard from "../../../public/images/recipes/storyboard.png"


const Recipes = () => {
  return (
    <>
      <Head>
        <title>Ella Bach | Anthony&apos;s Chef Recipes</title>
        <meta name='description' content="This is the project of unsolicited redesign for a bakery shop in Montreal QC" />
      </Head>
      
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Anthony&apos;s Recipe Website" className='mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>

          <div className='w-full flex justify-center items-start gap-20 mx-auto'>
            <div className='flex flex-col'>
              <section className='flex flex-col my-2'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Overview</h3>
                <p className='text-lg lg:text-base'>This project has 2 different requests such as Design Sprint and High-Fidelity Design</p>

                <section className='my-5'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold'>1. Design Sprint: The Anthony&apos;s Recipe Website has 2 problems that need to be solved. </h4>
                  <div className='flex flex-col gap-4'>
                    <div>
                      <p className='italic text-gold text-xl lg:text-lg md:text-md py-4'>Problem 1 (User Side): Collecting Recipes </p>
                      <p className='text-lg lg:text-base'>The case study explained that the website owner needs an efficient way to collect recipes from readers. Currently, recipes are submitted via email, creating a significant backlog, and making it difficult to store and filter submissions. To resolve this, he wants the website to include a feature allowing users to submit recipes online.</p>
                    </div>

                    <div>
                      <p className='italic text-gold text-xl lg:text-lg md:text-md py-4'>Problem 2 (Admin Side): Categorizing, Editing, and Publishing Recipes</p>
                      <p className='text-lg lg:text-base'>The website owner also wants an admin dashboard where he can log in to manage submitted recipes. This dashboard should enable him to edit, categorize, and publish recipes once he has completed cooking them. </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold py-4'>2. High-Fidelity Design composition for Anthory&apos;s Recipe  </h4>
                  <p className='text-lg lg:text-base'>This project focuses on achieving the owner&apos;s goal: to design a landing page that engages visitors and encourages them to regularly use the website for their recipe needs.</p>
                </section>
              </section>

              <section className='flex flex-col my-6'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Skills and Techniques</h3>
                <ul className='text-lg lg:text-base'>
                  <li>Design Sprint</li>
                  <li>Figma</li>
                  <li>Adobe Photoshop</li>
                  <li>Design System</li>
                </ul>
              </section>
            </div>
          </div>

          <section>
            <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold py-10'>Working Process</h3>

            <div className='flex flex-col justify-center'>
              {/* Design Sprint */}
              <div className='flex flex-col mb-20'>
                <div className='flex flex-col gap-4'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold italic text-gold'>1. Design Sprint</h4>
                  <p className='text-lg lg:text-base'>Following the design sprint framework, I developed solutions for each problem by defining the long-term goal, creating design sprint questions, and mapping the current user journey. Based on this information, I sketched three possible solutions and created a storyboard.</p>
                  <p className='text-lg lg:text-base'>Using the storyboard as a foundation, I designed a low-fidelity prototype to test the functionality of the website for both the admin and user sides. With the first draft of the prototype, I conducted tests with three different audiences. After validating through the testing phase, I refined and enhanced my prototype to align with the long-term goal established at the beginning of the project.</p>
                  <p className='text-lg lg:text-base'>This project has helped me deepen my understanding of problem-solving for a website, focusing on both design and functionality to ensure usability and achieve the intended goals.</p>
                </div>

                <div className='my-8 flex flex-col items-center lg:items-start'>
                  <p className='my-4 text-lg lg:text-base text-gold font-semibold'>Story Board</p>
                  <Image src={storyboard} alt='The story board of the solutions for the case study' className='w-[80%] h-auto rounded-md'/>
                </div>

                <div className='flex lg:flex-col'>
                  <div className='my-8'>
                    <p className='my-4 text-lg lg:text-base text-gold font-semibold'>Mobile Wireframe</p>
                    <Image src={mobileWireframe} alt='The mobile wireframe for the user side problem' className='w-[80%] h-full rounded-md'/>
                  </div>

                  <div className='my-8'>
                    <p className='my-4 text-lg lg:text-base text-gold font-semibold'>Desktop Wireframe</p>
                    <Image src={desktopWireframe} alt='The mobile wireframe for the user side problem' className='w-[80%] h-full rounded-md'/>
                  </div>
                </div>
              </div>

              {/* High Fidelity */}
              <div className='flex flex-col mb-20'>
                <div className='flex flex-col gap-4'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold italic text-gold'>2. High Fidelity Design Composition for Anthony&apos;s Recipe</h4>
                  <p className='text-lg lg:text-base'>I developed a prototype for the landing page based on the problems identified during the design sprint on the user side. From this prototype, I created high-fidelity design compositions for small, medium, and desktop devices. </p>
                  <p className='text-lg lg:text-base'>Next, I needed to prepare a design system for the development stage. This design system includes a grid layout setup with information on spacing, typography, and font scales for different devices to ensure responsiveness and user-friendliness. It also encompasses the color palette, as well as effects like rounded corners, box shadows, and overlays. Additionally, I defined the button and link designs for various states, such as default and hover. I included dos and don&apos;ts for the developers to ensure that the final product matches the design and functionality of the high-fidelity wireframes and prototypes. </p>
                  <p className='text-lg lg:text-base'>For the landing page, I incorporated as much information as possible that Anthony wants for his website. Users will be able to find trending categories based on seasonal selections. The call-to-action buttons encourage users to explore more recipes, sign up for an account, and become members so they can submit their recipes to Anthony. I also created a navigation link to weekly quizzes to engage users and make their experience enjoyable, not just focused on finding recipes.</p>
                </div>

                <div className='grid grid-cols-12'>
                  <div className='col-span-5 lg:col-span-12 flex flex-col items-center'>
                      <p className='text-2xl lg:text-xl md:text-lg py-4 font-semibold text-gold'>Desktop High Fidelity</p>
                      <Image src={desktop} alt='High fidelity wireframe desktop version' className='w-full h-auto  rounded-md border border-solid border-gold p-2'/>
                    </div>

                  <div className='col-start-7 lg:col-span-12 col-span-5 flex flex-col items-center'>
                    <p className='text-2xl lg:text-xl md:text-lg py-4 font-semibold text-gold'>Mobile High Fidelity</p>
                    <Image src={mobile} alt='High fidelity wireframe mobile version' className='w-full h-full  rounded-md border border-solid border-gold p-2'/>
                  </div>
                </div>
              </div>
            </div>

          </section>
            


          <section className='flex flex-col gap-4'>
            <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold py-10'>Final Thoughts</h3>

            <p className='text-xl lg:text-base'>One of the techniques that I applied for this project was design sprint. It allowed me to focus on understanding user needs, sketching solutions, and validating functionalities. Using the storyboard during the design sprint helped me understand how the website&apos;s flow could impact user experience and engagement. This step was invaluable when I moved on to developing the high-fidelity design.</p> 
            
            <p className='text-xl lg:text-base'>The purpose of user testing during a design sprint is to validate design concepts before moving into development. It also helps me understand how users interact with the functionality and flow of the website.</p>

            <p className='text-xl lg:text-base'>In this project, I practiced design sprint skills, including defining long-term goals, mapping challenges, sketching, prototyping, and creating both low- and high-fidelity wireframes. These skills are essential in web design, as they help improve usability, creating a successful and user-centered product in the future.</p>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Recipes