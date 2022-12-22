import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocials() {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com/in/hashmatullah-afroz-0a53a0249" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/HashmatullahAfroz" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
