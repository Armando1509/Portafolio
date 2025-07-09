import React from "react";

const Proyects = ({idioma}) => {
  const textos = {
    es: {
      titulo: "Mis Proyectos",
      descripcion: "Proyectos FullStack",
      tecnologias: "Tecnologias",
      proyecto1: "Proyecto Video Juegos",
      descripcion1:
      "Mostrar carpeta de videojuegos con informacion especifica de cada uno, con barra de busqueda, filtros, ordenamiento y tambien crear un nuevo videojuego. Consumo de API y creacion de Base de datos",
      proyecto2: "Proyecto Paby",
      descripcion2:
      "Proyecto basado en la busqueda de estacionamientos disponibles en tu region, con carrito de compras, filtro, ordenamiento y con oportunidad de reservarlos y pagarlos. Tambien cuenta con su administracion, donde se pueden agregar, eliminar y editar estacionamientos.",
      proyecto3: "Proyecto TecnoCAMP",
      descripcion3:
      "Tienda online de productos tecnologicos, con carrito de compras, busqueda, filtros y ordenamiento. tambien cuenta con su administracion, donde se pueden agregar, eliminar y editar productos.",
      traducir: "English",
    },
    en: {
      titulo: "My Projects",
      descripcion: "FullStack Projects",
      tecnologias: "Technologies",
      proyecto1: "Video Games Project",
      descripcion1:
        "Show a folder of video games with specific information about each one, with a search bar, filters, sorting, and also create a new video game. API consumption and database creation.",
      proyecto2: "Paby Project",
      descripcion2:
        "Project based on searching for available parking spaces in your area, with a shopping cart, filter, sorting, and the opportunity to reserve and pay for them. It also has its administration, where you can add, delete, and edit parking spaces.",
      proyecto3: "TecnoCAMP Project",
      descripcion3:
        "Online store for technological products, with a shopping cart, search, filters, and sorting. It also has its administration, where you can add, delete, and edit products.",
      traducir: "Español",
    },
  };
 
  const cambiarIdioma = () => {
    idioma === "es" ? "en" : "es";
  }


  return (
    <div className="proyects">
      <h2 className="text-4xl pl-10 mt-20 ">{textos[idioma].titulo}</h2>
{/*       <h2 className="text-4xl pl-10 mt-10">{textos[idioma].descripcion}</h2>
 */}
      <div className="flex flex-row justify-center gap-20 mt-12">
        {/* Columna 1 */}
        <div className="bg-gray-900 shadow-lg shadow-teal-400 border-amber-100 rounded-xl p-8 w-100 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Proyecto Video Juegos</h3>
          <p className="mb-4 text-gray-600">
            {textos[idioma].descripcion1}
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Front-end: React, Axios, Reacto-dom, React-redux.
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Back-end: Axios, Express, Sequelize, PostgreSQL.
          </p>
          <a
            href="https://github.com/Armando1509/PI-Videogames-main"
            target="_blank"
            src='/images/node.png'
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-700"
          >
            <img
              src="/images/github.png" 
              alt="Node.js"
              className="w-20 h-20 mb-4 mt-20 "
            />
            {/* Puedes usar un emoji o un icono SVG */}
            
          </a>
        </div>
        {/* Columna 2 */}
        <div className="bg-gray-900 shadow-lg shadow-teal-400 border-amber-100 rounded-xl p-8 w-100 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Proyecto Paby</h3>
          <p className="mb-4 text-gray-600">
            {textos[idioma].descripcion2}
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Front-end: React, Axios, Reacto-dom, React-redux,
            Bootstrap.{" "}
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Back-end: Axios, Express, Sequelize, PostgreSQL, Bcrypt,
            Jsonwebtoken, MercaodPago.
          </p>
          <a
            href="https://github.com/Lautaro261/paby-PF/tree/development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-700"
          >
            
            <img
              src="/images/github.png"
              alt="Node.js"
              className="w-20 h-20 mb-4 mt-2 "
            />
            
          </a>
        </div>
        {/* Columna 3 */}
        <div className="bg-gray-900 shadow-lg shadow-teal-400 border-amber-100 rounded-xl p-8 w-100 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2">Proyecto TecnoCAMP</h3>
          <p className="mb-4 text-gray-600">
            {textos[idioma].descripcion3}
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Front-end: React, Axios, Reacto-dom, React-redux,
            Bootstrap.
          </p>
          <p className="mb-4 text-gray-600">
            {textos[idioma].tecnologias} Back-end: Axios, Express, Sequelize, PostgreSQL, Bcrypt,
            Jsonwebtoken, MercaodPago.
          </p>
          <a
            href="https://github.com/Lautaro261/TecnoCAMP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:text-blue-700"
          >
            <img
              src="/images/github.png"
              alt="Node.js"
              className="w-20 h-20 mb-4 mt-15 "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
