"use client";
import React, { useState } from "react";

const Contact = ({idioma}) => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };

    const response = await fetch("https://formspree.io/f/xblywvpl", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(form),
    });

    if (response.ok) {
      setEnviado(true);
      form.reset();
      setTimeout(() => setEnviado(false), 5000); // Oculta el mensaje después de 4 segundos
    } else {
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  const textos = {
    es: {
      nombre: "Nombre",
      telefono: "Teléfono",
      email: "Correo",
      mensaje: "Mensaje",
      descripcion: "Si tienes alguna pregunta o comentario, no dudes en contactarme.",
    },
    en: {
      nombre: "Name",
      telefono: "Phone",
      email: "Email",
      mensaje: "Message",
      descripcion: "If you have any questions or comments, feel free to reach out to me.",
    },
  };

  const cambiarIdioma = () => {
    idioma === "es" ? "en" : "es";
  };

  return (
    <div className="mb-20">
      <h1 className="text-4xl pl-10 mt-20">Contactame</h1>
      <div className="flex flex-row justify-center gap-20 mt-12  bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col items-start">
            <label className="text-2xl ml-10 pl-10 mt-10">{textos[idioma].nombre}</label>
            <input
              type="text"
              name="nombre"
              className="w-100 h-7 ml-20 mt-5 bg-gray-200 text-black p-2"
              required
            />
            <label className="text-2xl ml-10 pl-10 mt-10">{textos[idioma].telefono}</label>
            <input
              type="text"
              name="nombre"
              className="w-100 h-7 ml-20 mt-5 bg-gray-200 text-black p-2"
              required
            />
            <label className="text-2xl ml-10 pl-10 mt-10">{textos[idioma].email}</label>
            <input
              type="email"
              name="email"
              className="w-100 h-7 ml-20 mt-5 bg-gray-200 text-black p-2"
              required
            />
            <label className="text-2xl ml-10 pl-10 mt-10">{textos[idioma].mensaje}</label>
            <textarea
              name="mensaje"
              className="w-100 h-32 ml-20 mt-5 bg-gray-200 text-black p-2"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded ml-20 mt-5"
            >
              Enviar
            </button>
          </div>
        </form>
        {enviado && (
          <div className="text-green-600 font-bold text-xl mt-4 ml-10">
            ¡Mensaje enviado correctamente!
          </div>
        )}

        <div className="flex flex-col items-center justify-center">
          <img 
          src="/images/telefono.png" 
          className="h-20 w-20 mb-4"
          />
          <h1 className="text-2xl pt-2 " >Telefono de contacto </h1>
          <h2>+52-55-2899-4342 </h2>
          <img
          src="/images/email3.png"
          className="h-22 w-22 bm-4"
          />
          <h1>Email</h1>
          <h1>armandogomez1509@gmail.com</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
