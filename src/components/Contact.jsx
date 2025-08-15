import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
     <div className='mt-10 text-white text-center'>
            <h1 className='text-xl md:2xl '>I can help you design, improve, and build on your new or existing projects. Feel free to get in touch with me.</h1>
            <p className='text-xl md:2xl opacity-50 mt-5'>Say Hello!</p>
            <div>
                <div>
                    <div className='mt-8'>
                      <div className='place-items-center mt-8'>
                        <span className='text-sm md:text-xl'><CgMail /></span>
                        <h5 className='text-sm md:text-xl opacity-70 mt-2'><a href="mailto:millerjoel7597@gmail.com">millerjoel7597@gmail.com</a></h5>
                      </div>
                      <div className='place-items-center mt-8'>
                        <span className='text-sm md:text-xl'><FaPhoneAlt /></span>
                        <h5 className='text-sm md:text-xl opacity-70 mt-2'><a href="tel:+2348097177851">+2348097177851</a></h5>
                      </div>
                        
                    </div>
                </div>
            
    
            </div>
    
        </div>
  )
}

export default Contact