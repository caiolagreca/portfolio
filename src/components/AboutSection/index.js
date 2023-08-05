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
              I'm a Fullstack Web Developer, working at Jade Finance, developing
              webpages through technologies such as PHP and PostgreSQL. Before
              that I had worked at Tecomat, which I was involved in developing
              and maintaining the company’s management system, working with
              React and Node with Typescript, MongoDB and AWS. I also have
              usually contact with, Git, Bitbucket, Postman and Trello.
              Moreover, in parallel, I've been developing and collaborating on
              open-source projects in Angular and deepening my knowledge into
              Design Systems, Microservices and E2E test.<br/>
              Furthermore, I’m
              graduated in Engineering, and with a great experience in the
              financial market working in a financial technology company.
              Previously I owned a website of technology products, being
              responsible for all the infrastructure, website maintenance, and
              customer communication. Through these experiences I have developed
              skills of extreme relevance to work in the area, such as good
              communication, team work, emotional intelligence, organization,
              planning and time management.
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
