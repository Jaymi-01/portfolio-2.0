import React from "react";
import { TypeAnimation } from "react-type-animation";
import Me from "/me.jpg";
import CV from "/Joel-Miller-Resume.pdf";
import { motion } from "framer-motion";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Joel-Miller-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Designer",
              1000,
              "IT Support",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold font-script text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg my-6"
          >
            <span className="font-script">I'm Joel Miller</span>, a frontend
            developer passionate about crafting engaging user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-4 py-2 border border-primary rounded-xl hover:bg-primary"
              onClick={handleDownloadCV}
            >
              Download My CV
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="place-items-center">
          <motion.img
            src={Me}
            alt="Joel Miller"
            className="w-[300px] md:w-[450px] rounded-full shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
