import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="seccion-hero" data-aos="zoom-in">
      <h1>
        Kevin Castro<span> Desarrollador FullStack</span>
      </h1>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button className="boton-cv">Descargar CV</button>
      </a>
    </div>
  );
};

export default Hero;
