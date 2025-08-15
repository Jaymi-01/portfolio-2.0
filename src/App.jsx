import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-4 max-w-6xl mx-auto">
        <section id="about" className="scroll-mt-20 py-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20 py-8">
          <Skill />
        </section>

        <section id="projects" className="scroll-mt-20 py-8">
          <Project />
        </section>

        <section
          id="contact"
          className="scroll-mt-15 py-8 flex items-center justify-center"
        >
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
