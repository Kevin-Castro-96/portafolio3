import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">KC</div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`nav-list ${menuOpen ? "open" : ""}`}
          data-aos={menuOpen ? undefined : "fade-left"}
        >
          <li>
            <a href="#trabajos" onClick={() => setMenuOpen(false)}>
              Trabajos
            </a>
          </li>
          <li>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contactame" onClick={() => setMenuOpen(false)}>
              Contáctame
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
