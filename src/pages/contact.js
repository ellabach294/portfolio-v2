import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import { MailIcon, PhoneIcon, LocationIcon } from '@/components/Icons'

const contact = () => {
  return (
    <>
        <Head>
            <title>Ella Bach | Contact Page</title>
            <meta name='description' content="This is the projects that has been designed and developed by Ella Bach" />
        </Head>

        <main className='w-full flex flex-col justify-center items-center'>
            <Layout>
                <AnimatedText text="Get In Touch" className='lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>

                <div className='w-full grid grid-cols-12 lg:grid-cols-6 items-start gap-24 mt-24 mx-auto'>
                    <div className='col-span-6 lg:col-span-6'>
                        <h3 className='text-4xl lg:!text-2xl font-bold text-gold mb-6'>Let&apos;s Talk</h3>
                        <p className='text-lg lg:!text-base font-medium'>I&apos;m always excited to explore new collaborations and opportunities! Whether you have a project idea, need assistance, or simply want to connect, feel free to reach out.</p>
                        <p className='flex gap-8 items-center pt-10 text-xl lg:!text-base'><MailIcon className="w-10 lg:!w-7"/> ellabach294@gmail.com</p>
                        <p className='flex gap-8 items-center pt-10 text-xl lg:!text-base'><PhoneIcon className="w-10 lg:!w-7"/> +1 825-436-6499</p>
                        <p className='flex gap-8 items-center pt-10 text-xl lg:!text-base'><LocationIcon className="w-10 lg:!w-7"/> Edmonton, Alberta, Canada</p>
                    </div>

                    <div className='col-span-6 lg:col-span-6'>
                        <form className='flex flex-col items-center lg:items-start gap-8'>
                            <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="name" className='block font-medium text-lg lg:!text-base text-gold'>Full Name</label>
                                <input type='text' placeholder='Enter your name' name='name' id='name' className='w-full rounded-md py-2.5 lg:!py-2 px-4 border text-md lg:!text-base outline-gold text-offBlack'/>
                            </div>
                            
                            <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="email" className='block font-medium text-lg lg:!text-base text-gold'>Email Address</label>
                                <input type='email' placeholder='Enter your email' name='email' id='email' className='w-full rounded-md py-2.5 lg:!py-2 px-4 border text-md lg:!text-base outline-gold text-offBlack'/>
                            </div>
                            
                            <div className='w-full flex flex-col gap-2'>
                                <label htmlFor="message" className='block font-medium text-lg lg:!text-base text-gold'>Your Message</label>
                                <textarea name='message' rows="8" placeholder='Enter your message' className='w-full rounded-md py-2.5 lg:!py-2 px-4 border text-md lg:!text-base outline-gold text-offBlack'></textarea>
                            </div>

                            <button type='submit' className='text-offBlack border border-solid border-offWhite bg-gold hover:bg-offBlack hover:text-offWhite hover:border-gold tracking-wide rounded-md px-4 py-3 w-[20%] text-lg !mt-6 lg:!text-base'>Submit</button>

                        </form>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default contact