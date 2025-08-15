import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="mt-14">
      <motion.h1
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, x: -100 }} // start hidden & left
        whileInView={{ opacity: 1, x: 0 }} // slide in to normal position
        viewport={{ once: true }} // run only once when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth slide
      >
        Skills
      </motion.h1>
        <motion.p
            className="mt-4 text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }} // start hidden & below
            whileInView={{ opacity: 1, y: 0 }} // slide in to normal position
            viewport={{ once: true }} // run only once when in view
            transition={{ duration: 1, ease: "easeOut" }} // smooth slide
          >
            A comprehensive list of technologies and frameworks I have expertise in.
          </motion.p>
    </div>
  );
};

export default Skill;
