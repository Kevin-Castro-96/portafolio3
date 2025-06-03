import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contactame.css";
import SocialLinks from "./Social";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bs40flr",    // reemplaza con tu Service ID
        "template_770s6qf",   // reemplaza con tu Template ID
        form.current,
        "d1ks-rGPg7ntG-rY1"     // reemplaza con tu Public Key
      )
      .then(
        () => {
          alert("Formulario enviado con éxito");
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            mensaje: "",
          });
        },
        (error) => {
          alert("Hubo un error al enviar el formulario: " + error.text);
        }
      );
  };

  return (
    <div className="contenido-contacto" id="contactame" data-aos="fade-left">
      <div className="seccion-formulario">
        <form ref={form} onSubmit={handleSubmit}>
          <h2>Contactame</h2>
          <div className="campos">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Escribe aqui tu mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contenedor-boton">
            <button type="submit" className="boton-enviar">
              Enviar
            </button>
          </div>
        </form>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Formulario;
