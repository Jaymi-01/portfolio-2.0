import React from "react";
import { motion } from "framer-motion";
import { proficiency } from "../constant/Index";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skill = () => {
  return (
    <div className="mt-14">
      <motion.h1
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Skills
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-400 text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time
        transition={{ duration: 1, ease: "easeOut" }}
      >
        A comprehensive list of technologies and frameworks I have expertise in.
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time
      >
        {proficiency.map((option, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          >
            <div className="px-6 py-4 border border-primary bg-secondary/10 rounded-xl">
              <p className="text-xl">{option.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
