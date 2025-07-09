"use client";
import React, { useState } from "react";

const AboutMe = ({ idioma, setIdioma }) => {
  const textos = {
    es: {
      titulo: "Desarrollador de Software",
      acercaDeMi: "Acerca de mí",
      descripcion:
        "Soy un desarrollador Full-Stack Web apasionado por la tecnología y la creación de soluciones innovadoras. Me especializo en el desarrollo web y disfruto trabajando con las últimas tecnologías para construir aplicaciones eficientes y escalables. Durante mi camino de aprendizaje, he tenido la oportunidad de trabajar en una variedad de proyectos. También durante mi formación en el bootcamp tuve la experiencia de trabajar en equipo, aunque finalice el bootcamp sigo mi aprendizaje de manera autodidacta, explorando nuevas herramientas y lenguajes de programación. ",
      descripcion2:
        "Siempre estoy buscando aprender y mejorar mis habilidades, y me encanta colaborar con otros para crear proyectos emocionantes.",
      traducir: "English",
    },
    en: {
      titulo: "Software Developer",
      acercaDeMi: "About me",
      descripcion:
        "I am a passionate Full-Stack Web Developer with a love for technology and creating innovative solutions. I specialize in web development and enjoy working with the latest technologies to build efficient and scalable applications. Throughout my learning journey, I have had the opportunity to work on a variety of projects. Also, during my training in the bootcamp, I had the experience of working in a team, but even after completing the bootcamp, I continue my learning in a self-taught manner, exploring new tools and programming languages.",
      descripcion2:
        "I am always looking to learn and improve my skills, and I love collaborating with others to create exciting projects.",
      traducir: "Español",
    },
  };
  const cambiarIdioma = () => {
    setIdioma(idioma === "es" ? "en" : "es");
  };

  return (
    <>
      {/* Informacion principal */}
      <div className="justify-center items-center text-center mt-35">
        <div className="justify-center items-center mt-10 shadow-sm">
          <h1 className="text-8xl text-amber-400">{textos[idioma].titulo}</h1>
          <h1 className="text-8xl pt-10">Armando Gómez</h1>

          <div className="pr-10 flex flex-row gap-6 justify-center">
            <a
              /* href="https://www.linkedin.com/in/jose-armando-gomez-sanchez-2b1a1424a/" */
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white text-2xl px-10 py-3 mt-10 rounded-full hover:bg-amber-500 text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Armando1509"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white text-2xl px-10 py-3 mt-10 rounded-full hover:bg-amber-500 text-center"
            >
              Github
            </a>
            <a
              href="/docs/CV Armando Gomez.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white text-2xl px-10 py-3 mt-10 rounded-full hover:bg-amber-500 text-center"
            >
              Mi CV
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center mt-10  ">
          <img src="/images/js.png" alt="Armando Gómez" className="w-20 h-20" />
          <img src="/images/node.png" className="w-20 h-20" />
          <img src="/images/postgres.png" className="w-20 h-20" />
          <img src="/images/gitbash.png" className="w-20 h-20" />
          <img src="/images/react.png" className="w-20 h-20" />
          <img src="/images/mongo.png" className="w-20 h-20" />
        </div>
      </div>
      <div className="about-me">
        <h2 className="text-4xl pl-10 mt-20">{textos[idioma].acercaDeMi}</h2>
        <p className="pl-10 mt-5 text-lg">{textos[idioma].descripcion}</p>
        <p className="pl-10 mt-5 text-lg">{textos[idioma].descripcion2}</p>
      </div>
    </>
  );
};

export default AboutMe;
