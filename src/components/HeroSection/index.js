import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroH1,
  HeroH2,
  HeroPhoto,
  HeroInfos,
  HeroLinks,
  HeroLink,
  HeroStrong,
} from "./HeroElements";

import Video from "../../videos/video.mp4";
import image from "../../images/perfil_edit.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroTitle>
          <HeroH1>
            <HeroStrong>Hello,</HeroStrong> I am <br /> Caio Lagreca
          </HeroH1>
          <HeroH2>Full Stack Developer</HeroH2>
          <HeroInfos>
            <HeroLinks>
              <HeroLink
                href="https://github.com/caiolagreca"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </HeroLink>
              GitHub
            </HeroLinks>
            <HeroLinks>
              <HeroLink
                href="https://www.linkedin.com/in/caio-lagreca-235b57190/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </HeroLink>
              LinkedIn
            </HeroLinks>
            <HeroLinks>
              <HeroLink
                href="mailto:caiomiranda701@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </HeroLink>
              E-mail
            </HeroLinks>
          </HeroInfos>
        </HeroTitle>
        <HeroPhoto
          src={image}
          alt="foto do perfil de Caio Lagreca com braços cruzados, sorrindo e de gravata azul."
        />
      </HeroContent>
    </HeroContainer>
  );
};
