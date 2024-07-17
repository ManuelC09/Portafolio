import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Bienvenidos a mi portafolio! 👋 <br />{""}
          <span className="underline underline-offset-8 decoration-purple-500">
            Soy Manuel
          </span>
        </h1>
        <TextGenerateEffect words="Soy un desarrollador de software junior y estudiante de ingeniería
          electrónica. Me encanta aprender y compartir conocimiento. Aquí
          encontrarás información sobre mis proyectos, habilidades y
          experiencia." className="md:w-96 text-lg text-gray-300" />
        
        <div className="flex space-x-8">
          <a href="mailto:mlfernando095@gmail.com" className="inline-block group">
            <div>
              <h1 className="text-3xl font-bold hover:text-purple-400 transition-all">
                Contáctame 📧
              </h1>
              <div className="w-40 h-2 bg-purple-600 rounded-full"></div>
              <div className="w-40 h-2 bg-purple-950 rounded-full translate-x-2"></div>
            </div>
          </a>
          
          <a href="CV Manuel Conrado.pdf" download className="inline-block group">
            <div>
              <h1 className="text-3xl font-bold hover:text-purple-300 transition-all">
                Descargar CV 📄
              </h1>
              <div className="w-40 h-2 bg-purple-600 rounded-full"></div>
              <div className="w-40 h-2 bg-purple-950 rounded-full translate-x-2"></div>
            </div>
          </a>
        </div>
      </div>

      {/* <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-purple-600"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>

          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-purple-600"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div> */}

  <div className="flex items-center justify-center w-80 h-80 relative rounded-full bg-opacity-50 backdrop-filter backdrop-blur-lg">
          <img className="max-w-full max-h-full rounded-full" src="https://i.imgur.com/4U5tBXC.png" alt="Manuel" />
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
    </div>
  );
}
