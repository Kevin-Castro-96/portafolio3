import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      Kevin Castro Desarrollador Fullstack © {year}
    </footer>
  );
};

export default Footer;
