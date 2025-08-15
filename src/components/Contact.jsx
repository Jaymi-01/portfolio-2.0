import React from 'react'
import { motion } from 'framer-motion'
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='mt-10 text-white text-center flex flex-col items-center'>
      <h1 className='text-xl md:text-2xl max-w-2xl'>
        I can help you design, improve, and build on your new or existing projects.
        Feel free to get in touch with me.
      </h1>

      <p className='text-xl md:text-2xl opacity-50 mt-5 flex items-center justify-center gap-2'>
        Say Hello!
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1.5,
            duration: 1,
          }}
          className="inline-block origin-bottom"
        >
          👋
        </motion.span>
      </p>

      <div className='flex flex-col items-center mt-8 gap-8'>
        <div className='flex flex-col items-center'>
          <span className='text-2xl md:text-3xl'><CgMail /></span>
          <h5 className='text-sm md:text-xl opacity-70 mt-2'>
            <a href="mailto:millerjoel7597@gmail.com">millerjoel7597@gmail.com</a>
          </h5>
        </div>

        <div className='flex flex-col items-center'>
          <span className='text-2xl md:text-3xl'><FaPhoneAlt /></span>
          <h5 className='text-sm md:text-xl opacity-70 mt-2'>
            <a href="tel:+2348097177851">+2348097177851</a>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Contact
