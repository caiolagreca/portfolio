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
              Olá! Sou o Caio, tenho 26 anos e moro em Recife - PE, Brasil.
              Desde sempre fui apaixonado por tecnologia, porém devido à
              oportunidades da época, acabei me formando em Engenharia Civil,
              trabalhando na área comercial. Como o desejo por tecnologia e
              programação nunca foi embora, decidi mudar o rumo de minha
              carreira e ir em busca do meu grande sonho.
              <br />
              <br />
              Desde minha primeira linha de código, fiquei realizado e tive a
              certeza de que havia tomado a decisão certa. Atualmente sou
              autodidata em Desenvolvimento Web, no qual desenvolvo Projetos em
              front-end, trabalhando com React.JS e Typescript. Estou começando a
              estudar a parte de back-end para futuramente tornar-me full-stack.
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
