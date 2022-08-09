import React from "react";

import {
  SkillContainer,
  SkillTitle,
  SkillsGrid,
  HardSkillGrid,
  SoftSkillGrid,
  LanguageGrid,
  HardSkillTitle,
  HardSkills,
  SoftSkills,
  HardSkill,
  SoftSkillTitle,
  SoftSkill,
  HardSkillIcon,
  HardSkillText,
  SoftSkillIcon,
  SoftSkillText,
  Language,
  LanguageTitle,
  LanguageText,
} from "./SkillElements";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiSass,
} from "react-icons/si";
import { GiBrain, GiNetworkBars, GiTeamIdea, GiTalk } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";

function SkillSection() {
  return (
    <SkillContainer id="habilidades">
      <SkillTitle>Habilidades</SkillTitle>
      <SkillsGrid>
        <HardSkillGrid>
          <HardSkillTitle>Hard Skills</HardSkillTitle>
          <HardSkills>
            <HardSkill>
              <HardSkillIcon>
                <SiHtml5 />
              </HardSkillIcon>
              <HardSkillText>HTML5</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiCss3 />
              </HardSkillIcon>
              <HardSkillText>CSS3</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiJavascript />
              </HardSkillIcon>
              <HardSkillText>Javascript</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiTypescript />
              </HardSkillIcon>
              <HardSkillText>Typescript</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiReact />
              </HardSkillIcon>
              <HardSkillText>ReactJS</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <FaGitAlt />
              </HardSkillIcon>
              <HardSkillText>Git</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiSass />
              </HardSkillIcon>
              <HardSkillText>Sass</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiBootstrap />
              </HardSkillIcon>
              <HardSkillText>Bootstrap</HardSkillText>
            </HardSkill>
          </HardSkills>
        </HardSkillGrid>
        <SoftSkillGrid>
          <SoftSkillTitle>Soft Skill</SoftSkillTitle>
          <SoftSkills>
            <SoftSkill>
              <SoftSkillIcon>
                <GiBrain />
              </SoftSkillIcon>
              <SoftSkillText>Inteligência emocional</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <GiNetworkBars />
              </SoftSkillIcon>
              <SoftSkillText>Capacidade de aprendizado</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <GiTeamIdea />
              </SoftSkillIcon>
              <SoftSkillText>Trabalho em equipe</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <AiOutlineSchedule />
              </SoftSkillIcon>
              <SoftSkillText>Organização e planejamento</SoftSkillText>
            </SoftSkill>
          </SoftSkills>
        </SoftSkillGrid>
        <LanguageGrid>
          <LanguageTitle>Idioma</LanguageTitle>
          <Language>
            <GiTalk />
            <LanguageText>Inglês Fluente</LanguageText>
          </Language>
        </LanguageGrid>
      </SkillsGrid>
    </SkillContainer>
  );
}

export default SkillSection;
