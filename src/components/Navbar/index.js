import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
} from "./NavbarElements";
import logo from "../../images/logo.png";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImg
              src={logo}
              alt="logotipo com nome Caio Lagreca - front end developer"
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="sobre"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                
              >
                Sobre
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="habilidades"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Habilidades
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projetos"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Projetos
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contato"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contato
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
