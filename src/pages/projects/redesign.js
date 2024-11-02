import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import redesignImage from "../../../public/images/redesign/featured-img.png"
import milestone1 from "../../../public/images/redesign/milestone-1.png"
import milestone1cont from "../../../public/images/redesign/milestone-1-2.png"
import milestone2 from "../../../public/images/redesign/milestone-2.png"
import milestone3Before from "../../../public/images/redesign/before.png"
import phoneMockup from "../../../public/images/redesign/phone-mockup.png"
import Image from 'next/image'
import { LinkArrow } from '@/components/Icons'

const Redesign = () => {
  return (
    <>
      <Head>
        <title>Ella Bach | Unsolicited Redesign</title>
        <meta name='description' content="This is the project of unsolicited redesign for a bakery shop in Montreal QC" />
      </Head>
      
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Unsolicited Redesign" className='mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>

          <div className='w-full flex lg:flex-col lg:gap-5 justify-center items-start gap-20 mx-auto'>
            <div className='flex flex-col align-start'>
              <section className='flex flex-col my-2'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Overview</h3>
                <p className='text-lg lg:text-base'>Following the instructions, I was assigned to redesign the website for a bakery located in Montreal, QC, Canada. The site I chose is Boulangerie Louis Marchand & Compagnie. The original of website has numerous issues, including low quality of images, a menu page that doesn&apos;t working, and a lack of information. The redesign has fixed such issues and improved the website&apos;s usability and user engagement.</p>
              </section>

              <section className='flex flex-col my-6'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Project Goal</h3>
                <p className='text-lg lg:text-base'>The goal for this project is to create a user-friendly and responsive site, using the best practice in designing a website.</p>
              </section>

              <section className='flex flex-col my-6'>
                <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Skills and Techniques</h3>
                <ul className='text-lg lg:text-base'>
                  <li>Adobe Photoshop</li>
                  <li>Procreatep</li>
                  <li>CRAP Principles</li>
                </ul>
              </section>
              
            </div>

            <div className='flex justify-center'>
              <Image src={redesignImage} alt='Redesing website featured image for the landing page' className='w-[75%] h-auto mt-10 rounded-md'/>
            </div>
          </div>

          <section className='flex flex-col align-start'>
            <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl  font-semibold py-10'>Working Process</h3>

            <div className='flex flex-col justify-center'>
              {/* Milestone 1 */}
              <div className='flex flex-col mb-20 lg:mb-10'>
                <div className='flex flex-col gap-4'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold italic text-gold'>Milestone 1</h4>
                  <p className='text-lg lg:text-base'>I reviewed their existing website and noticed it is quite small, lacking in information, with low-quality images, excessive white space, and unengaging content. I created a site map and a low-fidelity wireframe for the homepage, designed for both mobile and desktop screens to ensure responsiveness. </p>
                  <p className='text-lg lg:text-base'>While the site is small, I found a diverse product menu on their Facebook page. Based on this, I created a separate menu page to allow customers to place online orders for delivery or pick-up. </p>
                  <p className='text-lg lg:text-base'>For Milestone 1, my focus was on developing the site map and low-fidelity wireframes. </p>
                </div>

                <div className='grid grid-cols-7 lg:gap-10 my-12'>
                  <Image src={milestone1} alt='Low fidelity wireframe desktop version' className='w-full lg:col-span-7 h-auto col-start-2 col-end-4 rounded-md border border-solid border-gold p-2'/>
                  <Image src={milestone1cont} alt='Low fidelity wireframe mobile version' className='w-full lg:col-span-7 h-auto col-start-5 col-end-7 rounded-md border border-solid border-gold p-2'/>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className='flex mb-20 lg:my-5 lg:flex-col items-start justify-center gap-12'>
                <div className='flex items-center justify-center lg:order-last'>
                  <Image src={milestone2} alt='Project moodboard for typography, colors, graphics' className='w-[80%] h-auto rounded-md border border-solid border-gold p-2' />
                </div>

                <div className='flex flex-col gap-4'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold italic text-gold'>Milestone 2</h4>
                  <p className='text-lg lg:text-base'>I moved on to the next step, creating the high-fidelity wireframe in Figma using a grid system: 12 columns for desktop and 6 columns for mobile. For the website&apos;s color palette, I drew inspiration from an image of their signature croissant and the bakery’s interior decor. My goal is to maintain color consistency across their website, social media, and their store.</p>
                  <p className='text-lg lg:text-base'>For typography, I paired the fonts Arvo and Lato to achieve a harmonious blend of classic elegance and modern simplicity, well-suited to the bakery&apos;s web design. </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className='flex flex-col mb-20'>
                <div className='flex flex-col gap-4'>
                  <h4 className='text-2xl lg:text-xl md:text-lg font-semibold italic text-gold'>Milestone 3</h4>
                  <p className='text-lg lg:text-base'>The high-fidelity wireframes for the homepage and menu page have been fully designed in Adobe Photoshop. This project has been a significant undertaking, as I had to start everything from scratch and carry it through to completion. Although I have only redesigned 2 out of the 5 pages (based on the sitemap), this has been a valuable assignment for practicing essential skills like creating wireframes, setting up grid systems, working with flexbox, applying CRAP principles, selecting a cohesive color palette, pairing fonts, and mastering Figma.</p>
                </div>

                <div className='grid grid-cols-12 gap-10 my-12'>
                  <div className='col-span-3 lg:col-span-12 flex flex-col items-center'>
                    <p className='text-2xl lg:text-xl md:text-lg py-4 font-semibold text-gold'>Before</p>
                    <Image src={milestone3Before} alt='Low fidelity wireframe desktop version' className='w-full h-auto  rounded-md border border-solid border-gold p-2'/>
                  </div>
                  <div className='col-start-5 col-span-3 lg:col-span-12 flex flex-col items-center'>
                    <p className='text-2xl lg:text-xl md:text-lg py-4 font-semibold text-gold'>After</p>
                    <Image src={redesignImage} alt='Low fidelity wireframe mobile version' className='w-full h-auto  rounded-md border border-solid border-gold p-2'/>
                  </div>

                  <div className='col-start-9 col-span-3 lg:col-span-12 flex flex-col items-center'>
                    <p className='text-2xl lg:text-xl md:text-lg py-4 font-semibold text-gold'>Mobile Version</p>
                    <Image src={phoneMockup} alt='Low fidelity wireframe mobile version' className='w-full h-full rounded-md border border-solid border-gold p-2'/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='flex flex-col align-start'>
            <h3 className='text-gold text-4xl lg:text-3xl md:text-2xl sm:text-xl font-semibold pb-5'>Final Thoughts</h3>
            <p className='text-lg lg:text-base'>When working an unsolicited redesign, I need to understand the balance creative with respect for the original site&apos;s goals and brand. The redesign website should not only look better but also improve the user experiences, align with business objectives, and solve any usability issues. This project has helped me to learn how to identified the issues that may affect to the user and research solutions that enhance the overall user experiences.</p>
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Redesign