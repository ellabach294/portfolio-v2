import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref}/>
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type:"spring"}}
      >
        <h4 className='capitalize font-bold text-2xl text-gold lg:text-xl'>{type}</h4>
        <span className='capitalize font-medium italic'>
          {time} | {place}
        </span>
        <p className='font-medium w-full text-lg lg:text-base'>
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Educations = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )

  return (
    <div className='my-52 md:my-44'>
      <h3 className='font-bold text-8xl lg:!text-7xl md:!text-6xl sm:!text-5xl mb-32 w-full text-center'>My Educations</h3>

      <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>
        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-gold origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details 
            type="Digital Media & IT Diploma - Web Design and Development Concentration"
            time="2022 - 2024" place="Northern Alberta Institute of Technology | Edmonton, AB, Canada"
            info="GPA 4.0 - Dean Honour List:  Fall 2022, Winter 2023, Fall 2023, Winter 2024 "
          />

          <Details 
            type="Post-Graduate Diploma in Hospitality Marketing"
            time="2018 - 2018" place="Douglas College | Vancouver, BC, Canada"
            info="Deepen knowledge in marketing strategies, customer engagement, and brand management tailored to the hospitality industry."
          />

          <Details 
            type="Bachelor of Arts in Hospitality and Tourism Management"
            time="2011 - 2014" place="ERC Institute Vietnam - Greenwich University | Ho Chi Minh City, Vietnam"
            info="Second Class Honours (1st Division) with GPA 3.6"
          />
        </ul>
      </div>
    </div>
  )
}

export default Educations