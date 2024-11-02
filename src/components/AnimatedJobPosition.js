import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AnimatedJobPosition = () => {
    const jobTitles = [
        "Full Stack Web Developer",
        "Front-End Web Designer",
        "Graphic Designer"
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
        }, 2000);

        return () => clearInterval(interval)
    }, [jobTitles.length])
  return (
    <div className='md:text-xl text-2xl font-semibold text-white'>
        <AnimatePresence mode="wait">
            <motion.div
                key={jobTitles[index]}
                initial={{ opacity: 0, y:20 }}
                animate={{ opacity: 1, y:0 }}
                exit={{opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
            >
                {jobTitles[index]}
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedJobPosition