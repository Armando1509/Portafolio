"use client";
import React, { useState } from "react";

const textos = {
  es: {
    inicio: "Inicio",
    proyectos: "Proyectos",
    contacto: "Contacto",
    traducir: "English",
  },
  en: {
    inicio: "Home",
    proyectos: "Projects",
    contacto: "Contact",
    traducir: "Español",
  },
};

const Header = ({idioma,setIdioma}) => {

  const cambiarIdioma = () => {
    setIdioma(idioma === "es" ? "en" : "es");
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-gray-900 gap-4">
      <nav className="space-x-6 text-lg font-medium text-white">
        <a href="#Inicio" className="hover:text-blue-500">
          {textos[idioma].inicio}
        </a>
        <a href="#Proyects" className="hover:text-blue-500">
          {textos[idioma].proyectos}
        </a>
        <a href="#Contact" className="hover:text-blue-500">
          {textos[idioma].contacto}
        </a>
        <button
          onClick={cambiarIdioma}
          className="ml-4 px-3 py-1 bg-blue-600 rounded text-white hover:bg-blue-700"
        >
          {textos[idioma].traducir}
        </button>
      </nav>
    </div>
  );
};

export default Header;
