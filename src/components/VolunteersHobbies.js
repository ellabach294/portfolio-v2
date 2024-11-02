import { useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({type, time,event, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref}/>
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type:"spring"}}
      >
        <h4 className='capitalize font-bold text-2xl text-gold lg:text-xl'>{event}</h4>
        <span className='capitalize font-medium italic'>
            {type} | {time}
        </span>
        <p className='font-medium w-full text-lg lg:text-base'>
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const VolunteersHobbies = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset:["start end", "center start"]
    }
  )

  return (
    <div className='my-52 md:my-44'>
      <h3 className='font-bold text-8xl lg:!text-7xl md:!text-6xl sm:!text-5xl mb-32 w-full text-center'>Volunteers & Hobbies</h3>

      <div ref={ref} className='w-[75%] lg:w-[90%] md:w-full mx-auto relative'>
        <motion.div 
          style={{scaleY: scrollYProgress}}
          className='absolute left-9 top-0 w-[4px] h-full bg-gold origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details 
            event="DevEdmonton Hackathon 2024"
            type="Volunteer"
            time="November 2024"
            info="Volunteer to help the participants for the event DevelopEd 3.0, a two day hackathon in Edmonton."
          />
          <Details 
            event="Vietnamese Traditional Musician"
            type="Hobbies"
            time="Since I was young"
            info="I mastered the art of playing the Dan Bau, a Vietnamese traditional musical instrument, I now embrace it as a hobby to unleash my creativity."
          />
        </ul>
      </div>
    </div>
  )
}

export default VolunteersHobbies