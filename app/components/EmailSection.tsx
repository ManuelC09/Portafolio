"use client";
import React, { useState, FormEvent } from "react";
import Title from "./Title";

interface FormData {
  email: string;
  asunto: string;
  mensaje: string;
}

export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormData = {
      email: e.currentTarget.email.value,
      asunto: e.currentTarget.asunto.value,
      mensaje: e.currentTarget.mensaje.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setSubmissionError(false);
      } else {
        setSubmissionError(true);
      }
    } catch (error) {
      console.error("Error sending email", error);
      setSubmissionError(true);
    }
  };

  return (
    <div>
      <div>
        <Title text="Contácto" className="flex flex-col mt-8 items-center justify-center" />
      </div>
      <section id="contact" className="grid md:grid-cols-2 pt-20 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Contáctame</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Estoy disponible para colaboraciones, proyectos y cualquier otra consulta.
          </p>
          {emailSubmitted && (
            <p className="text-purple-600 text-sm mt-2">Email sent successfully!</p>
          )}
          {submissionError && (
            <p className="text-red-600 text-sm mt-2">Error sending email. Please try again later.</p>
          )}
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Tu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="ejemplo@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="asunto" className="text-white block text-sm mb-2 font-medium">
                Asunto
              </label>
              <input
                name="asunto"
                type="text"
                id="asunto"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Sobre qué quieres hablar..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="text-white block text-sm mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                id="mensaje"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
