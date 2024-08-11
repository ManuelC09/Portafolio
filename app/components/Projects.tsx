import React from "react";
import Title from "./Title";
import Link from "next/link";
import {
  SiGithub,
  SiHtml5,
  SiPython,
  SiGit,
  SiCss3,
  SiArduino,
  SiC,
  SiPostgresql,
  SiWix,
  SiSqlite,
  SiMysql,
  SiFlask,
  SiDjango,
  SiIobroker,
  SiTailwindcss
} from "react-icons/si";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Glowstar Lighting",
      tech: [SiWix],
      link: "https://www.glowstarlighting.com/",
      cover: "/glow.png",
      background: "bg-purple-600",
    },
    {
      title: "Hera",
      tech: [SiPython, SiFlask, SiMysql, SiHtml5, SiCss3, SiArduino],
      link: "",
      cover: "/hera.png",
      background: "bg-purple-600",
    },
    {
      title: "OxiPulso",
      tech: [SiPython, SiFlask, SiPostgresql, SiHtml5, SiTailwindcss, SiArduino, SiIobroker],
      link: "",
      cover: "/OxiPulso.png",
      background: "bg-purple-600",
    },
    {
      title: "Crown Exteriors Ltd",
      tech: [SiWix],
      link: "https://www.crownexteriorsyeg.ca/",
      cover: "/crow.png",
      background: "bg-purple-600",
    },
    {
      title: "La Sabrosa",
      tech: [SiPython, SiDjango, SiHtml5, SiCss3],
      link: "",
      cover: "/La Sabrosa.png",
      background: "bg-purple-600",
    },
    {
      title: "Blog",
      tech: [SiPython, SiDjango, SiHtml5, SiCss3],
      link: "",
      cover: "/blog.png",
      background: "bg-purple-600",
    },
    {
      title: "Calculadora de Convoluciones",
      tech: [SiPython, SiFlask, SiHtml5, SiCss3],
      link: "",
      cover: "/conv.png",
      background: "bg-purple-600",
    },
    {
      title: "Acortador de Urls",
      tech: [SiPython, SiFlask, SiMysql, SiHtml5, SiCss3],
      link: "",
      cover: "/acortador.png",
      background: "bg-purple-600",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      {/* Cambiar a 
      <Title 
        text="Proyectos"
        className="flex flex-col items-center justify-center rotate-6"
      /> si quiero el titulo rotado */}
      
      <Title 
        text="Proyectos"
        className="flex flex-col items-center justify-center"
      />
  
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className="p-5 rounded-md border border-purple-600 h-full w-full">
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
  
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
  
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
  
}
