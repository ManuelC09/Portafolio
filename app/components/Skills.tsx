"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiGithub, 
    SiHtml5, 
    SiPython, 
    SiGit, 
    SiCss3,
    SiArduino, 
    SiC, 
    SiPostgresql, 
    SiSqlite, 
    SiMysql, 
    SiFlask, 
    SiDjango} from "react-icons/si";

export default function Skills() {

    const skills = [
        {
            
            text: "Python",
            Icon: SiPython,
        },
        {
            
            text: "C",
            Icon: SiC,
        },
        {
            
            text: "HTML",
            Icon: SiHtml5,
        },
        {
            text: "Css",
            Icon: SiCss3,
        },
        {
            text: "Flask",
            Icon: SiFlask,
        },

        {
            text: "Django",
            Icon: SiDjango,
        },

        {
            text: "Github",
            Icon: SiGithub,
        },

        {
            text: "Git",
            Icon: SiGit,
        },

        {
            text: "Arduino",
            Icon: SiArduino,
        },

        {
            text: "Mysql",
            Icon: SiMysql,
        },

        {
            text: "Postgresql",
            Icon: SiPostgresql,
        },

        {
            text: "Sqlite",
            Icon: SiSqlite,
        },


    ]

return(
    <div className="max-w-5xl mx-auto px-8">
        {/* Cambiar  <Title text="Skills" className="flex flex-col items-center justify-center -rotate-6"/> si quiero rotado*/}
        <Title text="Skills" className="flex flex-col items-center justify-center"/>
        <HoverEffect items={skills}/>
    </div>
);
}