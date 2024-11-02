import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, time, address, work}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref}/>
      <motion.div
        initial={{y: 20}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type:"spring"}}
      >
        <h4 className='capitalize font-bold text-2xl lg:text-xl'>{position} <span className='text-gold'>@{company}</span> </h4>
        <span className='capitalize font-medium italic'>
          {time} | {address}
        </span>
        <p className='font-medium w-full text-lg lg:text-base'>
          {work} 
        </p>
      </motion.div>
    </li>
  );
};

const Experiences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )

  return (
    <div className='my-52 md:my-44'>
      <h3 className='font-bold text-8xl lg:!text-7xl md:!text-6xl sm:!text-5xl mb-32 lg:mb-28 w-full text-center'>My Experiences</h3>

      <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>
        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-gold origin-top md:!w-[2px] md:!left-[30px] xs:!left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details 
            position="Small Business Owner" company="Katppy DIY"
            time="2021 - present" address="Edmonton, AB, Canada"
            work="Enhanced user experience with appealing product images and SEO optimization, while demonstrating strong communication and organizational skills by managing orders, meeting deadlines, and responding to customer feedback and inquiries."
          />

          <Details 
            position="Part-time Store Clerks" company="Lougheed Town Convenience Store"
            time="2017 - 2019" address="Vancouver, BC, Canada"
            work="Welcomed customers, assisted with purchases, and enhanced the shopping experience. Operated the cash register, processed payments, and maintained accurate cash and card transactions."
          />

          <Details 
            position="Corporate Travel Agent" company="Amaris Consulting"
            time="2016 - 2017" address="Ho Chi Minh City, Vietnam"
            work="Streamlined travel bookings for clients, providing cost-effective options across Europe, Asia, and North America. Organized and managed employee training trips, utilizing the Amadeus system for efficient bookings and outstanding client support."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experiences