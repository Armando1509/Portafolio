"use client";
import React, {useState} from "react";
import Proyects from "./components/proyects";
import Header from "./components/header";
import AboutMe from "./components/About me";
import Contact from "./components/contact";


export default function Home() {
  const [idioma, setIdioma] = useState("es");
  return (
    <>
      
      <Header idioma={idioma} setIdioma={setIdioma} />
      <div id="Inicio" className="scroll-mt-24">
        <AboutMe idioma={idioma} setIdioma={setIdioma} />
      </div>
      <div id="Proyects" className="scroll-mt-24">
        <Proyects idioma={idioma}/>
      </div>
      <div id="Contact" className="scroll-mt-24">
        <Contact idioma={idioma}/>
      </div>
    </>
  );
}
