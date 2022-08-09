import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="sobre" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="habilidades" onClick={toggle}>
            Habilidades
          </SidebarLink>
          <SidebarLink to="projetos" onClick={toggle}>
            Projetos
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="contato" onClick={toggle}>
            Contato
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
