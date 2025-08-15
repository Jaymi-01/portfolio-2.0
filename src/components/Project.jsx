import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constant/Index";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each card
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // start lower
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Project = () => {
  return (
    <div>
      <motion.h1
        className="text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, x: -100 }} // start hidden & left
        whileInView={{ opacity: 1, x: 0 }} // slide in to normal position
        viewport={{ once: true }} // run only once when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // smooth slide
      >
        Projects
      </motion.h1>
      <motion.p
        className="mt-4 text-gray-400 text-lg md:text-xl"
        initial={{ opacity: 0, y: 20 }} // start hidden & below
        whileInView={{ opacity: 1, y: 0 }} // slide in to normal position
        viewport={{ once: false, amount: 0.3 }} // run only once when in view
        transition={{ duration: 1, ease: "easeOut" }} // smooth slide
      >
        Showcasing all my past projects.
      </motion.p>
      <AnimatePresence>
  <motion.div
    className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 mx-auto items-stretch"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {projects.map((project, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        className="flex" // makes the card fill height
      >
        <div className="flex flex-col justify-between px-6 py-4 border border-primary bg-secondary/10 rounded-xl w-full">
          <div>
            <h1 className="text-xl">{project.title}</h1>
            <p className="text-sm mt-2 text-primary font-semibold">
              {project.tools}
            </p>
            <div className="text-sm mt-2 opacity-50">
              <p>{project.text}</p>
            </div>
          </div>
          <div className="mt-4 group">
            <a
              className="text-sm text-white hover:text-primary flex items-center"
              target="_blank"
              href={project.link}
              rel="noopener noreferrer"
            >
              View Project
              {project.icon &&
                React.cloneElement(project.icon, {
                  className: "ml-2 group-hover:text-primary",
                })}
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>
    </div>
  );
};

export default Project;
