import React from "react";

const AboutMe = () => {
  return (
    <>
      {/* Informacion principal */}
      <div className="justify-center items-center text-center mt-35">
        <div className="justify-center items-center mt-10 shadow-sm">
          <h1 className="text-8xl text-amber-400">Software Developer</h1>
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
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center mt-10  ">
          <img src="/images/js.png" alt="Armando Gómez" className="w-20 h-20" />
          <img src="/images/node.png" className="w-20 h-20" />
          <img src="/images/postgres.png" className="w-20 h-20" />
        </div>
      </div>
      <div className="about-me">
        <h2 className="text-4xl pl-10 mt-20">Acerca de mí</h2>
        <p className="pl-10 mt-5 text-lg">
          Soy un desarrollador Full-Stack Web apasionado por la tecnología y la
          creación de soluciones innovadoras. Me especializo en el desarrollo
          web y disfruto trabajando con las últimas tecnologías para construir
          aplicaciones eficientes y escalables. Durante mi camino de
          aprendizaje, he tenido la oportunidad de trabajar en una variedad de
          proyectos. Tambien durante mi formacion en el bootcamp tuve la
          experiencia de trabajar en equipo, pero aunque finalice el bootcamp,
          sigo mi aprendizaje de manera autodidacta, explorando nuevas
          herramientas y lenguajes de programación.
        </p>
        <p className="pl-10 mt-5 text-lg">
          Siempre estoy buscando aprender y mejorar mis habilidades, y me
          encanta colaborar con otros para crear proyectos emocionantes.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
