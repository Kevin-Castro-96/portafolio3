import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import "./social.css";

const SocialLinks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="social-container" data-aos="fade-up">
      <h2 className="social-title">O sigueme en las redes sociales</h2>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/kevin-castro-b12357214/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KNC96"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub />
        </a>
        <a
          href="https://youtube.com/@practicandoprogramacion2022?si=O9VANOS747j_Jqi6"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
        >
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
