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
            Olá! Sou Desenvolvedor Web Front-end, no qual atuo como Freelancer desenvolvendo projetos em ReactJS e Javascript, e estou em busca de minha primeira oportunidade. Também graduado em Engenharia Civil, e com grande experiência no mercado financeiro trabalhando em uma fintech. Anteriormente fui proprietário do site Criativa TecHouse, no qual importávamos produtos de tecnologia, e eu era responsável por toda a infra, manutenção do site, e comunicação com o cliente. Através dessas experiências desenvolvi skills de extrema relevância para atuar no mercado, com uma boa comunicação, facilidade para trabalhar em equipe, inteligência emocional, organização, planejamento e gestão de tempo. Além disso, falo inglês fluentemente, no qual estudo e pratico há mais de 15 anos.
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
