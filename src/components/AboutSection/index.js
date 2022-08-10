import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import {
  AboutContainer,
  AboutTitle,
  AboutWrapper,
  Column1,
  Column2,
  TextWrapper,
  ImgWrap,
  Img,
} from "./AboutElements";

import code from "../../images/code.svg";


function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <AboutContainer id="sobre">
        <AboutTitle data-aos="fade-down">Sobre Mim</AboutTitle>
        <AboutWrapper>
          <Column1>
            <TextWrapper data-aos="fade-right">
              Olá! Sou o Caio, moro em Recife - PE, Brasil. Desenvolvedor Web, também graduado em Engenharia Civil no qual desde minha primeira linha de código, tive a certeza de que havia tomado a decisão correta. Atualmente sou autodidata em Front-End, atuando como Freelancer, no qual desenvolvo projetos em ReactJS e Javascript.
              <br />
              <br />
              Curiosidades sobre mim: Sou um entusiasta pela tecnologia, apaixonado pelo meu cachorro, viciado em Triathlon e tenho como um dos maiores prazeres da vida a leitura. Ah, não posso esquecer que sou um amante do Café!
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap data-aos="fade-left">
              <Img src={code} alt="logo" />
            </ImgWrap>
          </Column2>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default AboutSection;
