import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-10 text-gray-500 p-8">
      <h1>Joel</h1>
      <div className="flex gap-3 flex-row text-xl md:text-2xl">
        <a className="hover:text-primary" href="https://github.com/Jaymi-01">
          <AiOutlineGithub />
        </a>

        <a
          className="hover:text-primary"
          href="https://www.linkedin.com/in/jaymi1001/"
        >
          <AiOutlineLinkedin />
        </a>

        <a className="hover:text-primary" href="https://x.com/Jaymi_san">
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
