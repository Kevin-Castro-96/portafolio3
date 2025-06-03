import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Trabajos.css";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import gravitad from "../../images/gravitad.jpg";
import albertoPeralta from "../../images/alberto-peralta.jpg";

const projects = [
  {
    id: 1,
    title: "Landing para empresa B2B",
    image: albertoPeralta,
    url: "https://albertoperalta.com/",
    description: "Sitio web responsive de gestion de empresas",
    techs: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
  },
  {
    id: 2,
    title: "Pagina web de empresa B2B",
    image: gravitad,
    url: "https://gravitad.com/",
    description: "Sitio profesional para acelerar empresas.",
    techs: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaWordpress />, name: "WordPress" },
    ],
  },
];

const Trabajos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contenido-trabajo" id="trabajos" data-aos="fade-left">
      <div className="contenedor-trabajos">
        <h2>Trabajos realizados</h2>
        <section className="projects-section">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="tech-icons">
                  {project.techs.map((tech, index) => (
                    <div className="tech-item" key={index}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Trabajos;
