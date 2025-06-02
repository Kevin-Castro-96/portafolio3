import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHtml5, FaCss3Alt, FaWordpress, FaYoutube, FaGithub } from "react-icons/fa";
import Portafolio from "../../images/portafolioUno.jpg";
import canalYoutube from "../../images/canal-youtube.jpg";
import "./Proyectos.css";

const projects = [
  {
    id: 1,
    title: "Canal de YouTube Practicando_programacion",
    image: canalYoutube,
    url: "https://youtube.com/@practicandoprogramacion2022?si=_FKallffMmGrIJgt",
    description: "Tutoriales para aprender a crear paginas web",
    techs: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <FaYoutube />, name: "YouTube" },
    ],
  },
  {
    id: 2,
    title: "Primer portafolio creado",
    image: Portafolio,
    url: "https://knc96.github.io/portafolio_uno/",
    description: "Portafolio deployado desde GitHub",
    techs: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
  },
];

const Proyects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="contenido-trabajo" id="proyectos" data-aos="fade-up">
      <div className="contenedor-trabajos">
        <h2>Proyectos realizados</h2>
        <section className="projects-section">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              data-aos="fade-up"
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

export default Proyects;
