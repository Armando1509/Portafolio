export default function Home() {
  return (
    <>
      {/* Barra de arriba con especificaciones */}
      <div className="column">
        <div className="text-amber-800 text-2xl flex flex-row gap-4 justify-end-safe items-end-safe mt-10 pr-20">
          <p className="">Acerca de mi</p>
          <p>Inicio</p>
          <p>Proyectos</p>
          <p>Sobre mí</p>
          <p>Certificaciones</p>
          <p>Skills</p>
        </div>
      </div>
      {/* Informacion principal */}
      <div className="justify-center items-center text-center ">
        <div className="justify-center items-center mt-10 shadow-sm">
          <h1 className="text-8xl text-amber-400">Software Developer</h1>
          <h1 className="text-8xl pt-10">Armando Gómez</h1>

          <div className="pr-10 flex flex-row gap-6 justify-center">
            <a
              href="www.linkedin.com/in/jose-armando-gomez-sanchez-2b1a1424a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white text-2xl px-10 py-3 mt-10 rounded-full hover:bg-amber-500 text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white text-2xl px-10 py-3 mt-10 rounded-full hover:bg-amber-500 text-center"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
