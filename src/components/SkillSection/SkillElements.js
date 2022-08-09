import styled from "styled-components";

export const SkillContainer = styled.div`
  background: #121212;
  height: 90vh;
  padding: 6rem 1.5rem 0 1.5rem;

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

export const SkillTitle = styled.h3`
  text-align: center;
  padding: 1rem 0 1rem 0;
  font-size: 2rem;
  color: #01d85c;
`;

export const SkillsGrid = styled.div`
  color: #fff;
  display: grid;
  grid-template-areas:
    "hard soft"
    "hard language";
  grid-template-columns: 40% 40%;
  grid-template-rows: 35vh 20vh;
  gap: 1.5rem;
  justify-content: center;
 

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HardSkillGrid = styled.div`
  grid-area: hard;
  background-color: #212121;
  border-radius: 2rem;
`;

export const SoftSkillGrid = styled.div`
  grid-area: soft;
  background-color: #212121;
  border-radius: 2rem;
  padding: 0 0.8rem;
`;

export const LanguageGrid = styled.div`
  grid-area: language;
  background-color: #212121;
  border-radius: 2rem;

  @media screen and (max-width: 960px) {
    margin-bottom: 2rem;
  }
`;

export const HardSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-tempalte-rows: repeat(2, 1fr);
  margin: 2rem 2rem 0 0;
`;

export const HardSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #01d85c;
    transition: all 0.5s ease-in-out;
  }
`;

export const HardSkillIcon = styled.div`
  font-size: 2rem;
`;

export const HardSkillText = styled.h5`
  font-size: 0.9rem;
  margin: 0.5rem;
`;

export const HardSkillTitle = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin: 1.5rem;
  color: #01d85c;
`;

export const SoftSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-tempalte-rows: repeat(2, 1fr);

  
`;

export const SoftSkill = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #01d85c;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SoftSkillIcon = styled.div`
  font-size: 1.7rem;
`;
export const SoftSkillText = styled.h5`
  font-size: 0.8rem;
  padding: 0.75rem;
`;

export const SoftSkillTitle = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin: 1.5rem;
  color: #01d85c;
`;

export const LanguageTitle = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  margin: 1.2rem;
  color: #01d85c;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #01d85c;
    transition: all 0.5s ease-in-out;
  }
`;

export const LanguageText = styled.h5`
  font-size: 1rem;
  margin: 0.4rem;
`;
