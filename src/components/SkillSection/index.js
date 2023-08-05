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
  SiPhp,
  SiTypescript,
  SiReact,
  SiAngular,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiAmazonaws
} from "react-icons/si";
import { GiBrain, GiNetworkBars, GiTeamIdea, GiTalk } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

function SkillSection() {
  return (
    <SkillContainer id="habilidades">
      <SkillTitle>Skills</SkillTitle>
      <SkillsGrid>
        <HardSkillGrid>
          <HardSkillTitle>Hard Skills</HardSkillTitle>
          <HardSkills>
            <HardSkill>
              <HardSkillIcon>
                <SiReact />
              </HardSkillIcon>
              <HardSkillText>React.JS</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <FaNodeJs />
              </HardSkillIcon>
              <HardSkillText>Node.JS</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiPhp />
              </HardSkillIcon>
              <HardSkillText>PHP</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiTypescript />
              </HardSkillIcon>
              <HardSkillText>Typescript</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiMongodb />
              </HardSkillIcon>
              <HardSkillText>MongoDB</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiMysql />
              </HardSkillIcon>
              <HardSkillText>MySQL</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiAngular />
              </HardSkillIcon>
              <HardSkillText>Angular</HardSkillText>
            </HardSkill>
            <HardSkill>
              <HardSkillIcon>
                <SiAmazonaws />
              </HardSkillIcon>
              <HardSkillText>AWS</HardSkillText>
            </HardSkill>
          </HardSkills>
        </HardSkillGrid>
        <SoftSkillGrid>
          <SoftSkillTitle>Soft Skills</SoftSkillTitle>
          <SoftSkills>
            <SoftSkill>
              <SoftSkillIcon>
                <GiBrain />
              </SoftSkillIcon>
              <SoftSkillText>Emotional Intelligence</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <GiNetworkBars />
              </SoftSkillIcon>
              <SoftSkillText>Learning Ability</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <GiTeamIdea />
              </SoftSkillIcon>
              <SoftSkillText>Team Work</SoftSkillText>
            </SoftSkill>
            <SoftSkill>
              <SoftSkillIcon>
                <AiOutlineSchedule />
              </SoftSkillIcon>
              <SoftSkillText>Organization and Planning</SoftSkillText>
            </SoftSkill>
          </SoftSkills>
        </SoftSkillGrid>
        <LanguageGrid>
          <LanguageTitle>Language</LanguageTitle>
          <Language>
            <GiTalk />
            <LanguageText>Fluent English</LanguageText>
          </Language>
        </LanguageGrid>
      </SkillsGrid>
    </SkillContainer>
  );
}

export default SkillSection;
