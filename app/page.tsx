import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 ">
       <Navbar/>

        <HeroSection/>
      
      </div>

      <div className="max-w-7xl mx-auto mt-20 p-5 ">
        <Skills/>
        <Projects/>
        <Education/>
        <EmailSection/>
        <Footer/>
      </div>
    </div>
  );
}