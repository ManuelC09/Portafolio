import React from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiX } from "react-icons/si"

export default function Navbar({className}: { className?: string }) {
    
    const socials = [
      {
          Link:"https://www.linkedin.com/in/manuel-conrado-fern%C3%A1ndez-890898252/",
          Label: "Linkedin",
          Icon: SiLinkedin,
      },
      {
          Link:"https://github.com/ManuelC09",
          Label: "Github",
          Icon: SiGithub,
      },
      {
          Link:"https://x.com/manueelc9",
          Label: "X",
          Icon: SiX,
      },
      {
          Link:"https://www.instagram.com/manueelc9/",
          Label: "Instagram",
          Icon: SiInstagram,
      },
  ]
  
    return (
    <footer className=" flex-col gap-5 py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-600">
        Manuel Conrado 👨‍💻
      </h1>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
            const Icon = social.Icon;
            return <Link 
            href={social.Link} 
            key={index} 
            aria-label={social.Label}> 
                <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
            

})}
      </div>
      <p className="text-gray-300 text-sm">2024 Manuel Conrado. Todos los derechos reservados.</p>
    </footer>
  );
}