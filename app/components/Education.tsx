import React from "react";
import Title from "./Title";

import { FaUniversity } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

export default function Education() {

    const educations = [
        {
            name: "Universidad Nacional de Ingeniería",
            Icon: FaUniversity,
            title : 'Ingeniería Electrónica',
            period : '2021 - Actualmente',
        },
        {
            name: "C50X - Harvard University",
            Icon: PiCertificateFill,
            title : 'CS50x: Introducción a la Ciencia de la Computación',
            period : '2022',
        },
        {
            name: "Udemy",
            Icon: PiCertificateFill,
            title : 'Curso completo de Python 2023-De cero a Master con Python 3',
            period : '2022',
        },
        {
            name: "Alura Latam",
            Icon: PiCertificateFill,
            title : 'Oracle Next Education F2 T5 Back-end',
            period : '2023',
        },
    ];

    return (
        <div className="">

            <Title 
                text="Educación"
                className="flex flex-col mt-8 items-center justify-center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:px-40 mt-8 items-center justify-center">
                {educations.map((education, index) => (
                    <div key={index} className="border border-purple-600 p-5 rounded-lg space-y-5 mx-auto w-full max-w-sm flex flex-col h-full">
                        <div className="flex items-center justify-between">
                            <education.Icon className="text-5xl"/>
                            <h1 className="text-xl font-bold text-gray-300 px-3">{education.name}</h1>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-300">{education.title}</h1>
                        <p className="text-gray-400">{education.period}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
