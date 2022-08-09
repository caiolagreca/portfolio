import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { HeroSection } from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Projects from "../components/Projects";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import SkillSection from "../components/SkillSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <Projects />
      <ContactSection />
      <FooterSection/>
    </>
  );
};

export default Home;
