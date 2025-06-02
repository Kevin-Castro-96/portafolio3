import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import Formulario from "./components/contactame/Contactame";
import Trabajos from "./components/Trabajos/Trabajos";
import Hero from "./components/hero/SeccionHero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Proyects from "./components/Proyectos/Proyectos";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="app">
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#08131F" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outMode: "bounce",
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
      <div className="content">
        <Header/>
        <Hero/>
        <Trabajos/>
        <Proyects/>
        <Formulario/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;