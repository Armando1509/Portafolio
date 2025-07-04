import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row items-center justify-between px-8 py-6 bg-gray-900 gap-4">
      <nav className="space-x-6 text-lg font-medium text-white">
        <a href="#Inicio" className="hover:text-blue-500">
          Inicio
        </a>
        <a href="#Proyects" className="hover:text-blue-500">
          Proyectos
        </a>
        
        <a href="#Contact" className="hover:text-blue-500">
          Contacto
        </a>
      </nav>
    </div>
  );
};

export default Header;
