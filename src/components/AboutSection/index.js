import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <AboutContainer id="sobre">
        <AboutTitle data-aos="fade-down">About Me</AboutTitle>
        <AboutWrapper>
          <Column1>
            <TextWrapper data-aos="fade-right">
              I am a Fullstack Web Developer, working with technologies as React,
              Node and MongoDB. I also have usually contact with Git, Postman,
              AWS and Scrum as Agile methodology. I am also graduated in Civil
              Engineering, and with a great experience in the financial market
              working in a financial technology company. Previously I owned a
              website of technology products, being responsible for all the
              infrastructure, website maintenance, and customer communication.
              Through these experiences I developed skills of extreme relevance
              to work in the area, with good communication, team work, emotional
              intelligence and organization. In addition, I speak English
              fluently, which I have studied for over 17 years.
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
