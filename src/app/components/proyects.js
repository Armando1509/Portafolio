import React from "react";

const Proyects = () => {
  return (
    <div className="proyects">
      <h2 className="text-4xl pl-10 mt-20 ">Mis Proyectos</h2>
      <h2 className="text-4xl pl-10 mt-10">Proyectos FullStack</h2>

      <div className="flex flex-row justify-center gap-20 mt-12">
        {/* Columna 1 */}
        <div className="bg-gray-900 shadow-lg shadow-teal-400 border-amber-100 rounded-xl p-8 w-100 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3">Proyecto Video Juegos</h3>
          <p className="mb-4 text-gray-600">
            Mostrar carpeta de videojuegos con informacion especifica de cada
            uno, con barra de busqueda, filtros, ordenamiento y tambien crear un
            nuevo videojuego. Consumo de API y creacion de Base de datos
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Frontend: React, Axios, Reacto-dom, React-redux.{" "}
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Backend: Axios, Express, Sequelize, PostgreSQL.
          </p>
          <a
            href="https://github.com/tu-usuario/proyecto1"
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
            Proyecto basado en la busqueda de estacionamientos disponibles en tu
            region, con carrito de compras, filtro, ordenamiento y con
            oportunidad de reservarlos y pagarlos. Tambien cuenta con su
            administracion, donde se pueden agregar, eliminar y editar
            estacionamientos.
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Frontend: React, Axios, Reacto-dom, React-redux,
            Bootstrap.{" "}
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Backend: Axios, Express, Sequelize, PostgreSQL, Bcrypt,
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
            Tienda online de productos tecnologicos, con carrito de compras,
            busqueda, filtros y ordenamiento. tambien cuenta con su
            administracion, donde se pueden agregar, eliminar y editar
            productos.
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Frontend: React, Axios, Reacto-dom, React-redux,
            Bootstrap.
          </p>
          <p className="mb-4 text-gray-600">
            Tecnologias Backend: Axios, Express, Sequelize, PostgreSQL, Bcrypt,
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
