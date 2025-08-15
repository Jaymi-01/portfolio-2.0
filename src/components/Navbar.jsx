import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItemClasses =
    "relative cursor-pointer hover:text-blue-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed w-full bg-transparent shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand Name */}
          <div className="text-2xl font-bold cursor-pointer font-script">Jaymi</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li className={navItemClasses} onClick={() => handleScroll("about")}>About</li>
            <li className={navItemClasses} onClick={() => handleScroll("skills")}>Skills</li>
            <li className={navItemClasses} onClick={() => handleScroll("projects")}>Projects</li>
            <li className={navItemClasses} onClick={() => handleScroll("contact")}>Contact</li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-4 pb-4 text-lg">
            <li className={navItemClasses} onClick={() => handleScroll("about")}>About</li>
            <li className={navItemClasses} onClick={() => handleScroll("skills")}>Skills</li>
            <li className={navItemClasses} onClick={() => handleScroll("projects")}>Projects</li>
            <li className={navItemClasses} onClick={() => handleScroll("contact")}>Contact</li>
          </ul>
        )}
      </div>
    </nav>
  );
}
