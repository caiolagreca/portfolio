import React from "react";
import {
  FooterContainer,
  FooterDescription,
  FooterWrapper,
  FooterLinks,
  FooterLink,
} from "./FooterElements";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function FooterSection() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDescription>
          Caio Lagreca {new Date().getFullYear()}. All rights reserved.
        </FooterDescription>
        <FooterLinks>
          <FooterLink
            href="https://github.com/caiolagreca"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/caio-lagreca-235b57190/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </FooterLink>
          <FooterLink
            href="mailto:caiomiranda701@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail />
          </FooterLink>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default FooterSection;
