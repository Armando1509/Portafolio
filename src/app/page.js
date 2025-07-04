import { Inter } from "next/font/google";
import Proyects from "./components/proyects";
import Header from "./components/header";
import AboutMe from "./components/About me";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      
      <Header />
      <div id="Inicio" className="scroll-mt-24">
        <AboutMe />
      </div>
      <div id="Proyects" className="scroll-mt-24">
        <Proyects />
      </div>
      <div id="Contact" className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
}
