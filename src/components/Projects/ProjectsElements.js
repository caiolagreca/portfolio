import styled from "styled-components";

export const ProjectContainer = styled.section`
  color: #fff;
  background: #121212;
  height: 90vh;
  padding: 6rem 2rem 0 2rem;
  width: 100vw;

  @media screen and (max-width: 960px) {
    height: auto;
  }

  @media screen and (max-width: 468px) {
    padding: 6rem 1rem 0 1rem;
  }

  .rec.rec-arrow {
    background-color: #01d85c;
    color: #212121;

    @media screen and (max-width: 468px) {
      transform: scale(0.8);
    }
  }

  .rec.rec-arrow:hover {
    border: 2px solid #01d85c;
    background-color: #fff;
    color: #01d85c;
  }
`;

export const ProjectH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #01d85c;
`;

export const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #212121;
  border-radius: 20px;
  height: auto;
  margin: 1rem 1rem;

  @media screen and (max-width: 468px) {
    margin: 2rem 0.2rem;
  }
`;

export const ProjectImg = styled.img`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: 25vh;
`;

export const ProjectInfos = styled.div`
  margin: 1rem;
`;

export const ProjectTitle = styled.a`
  color: #e5e5e5;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;

  @media screen and (max-width: 468px) {
    font-size: 1rem;
  }
`;

export const ProjectSubtitles = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0.5rem 0 0.5rem 0;
  gap: 0.5rem;
`;

export const ProjectSubtitle = styled.h4`
  padding: 0.3rem;
  border: 1px solid #08e33c;
  border-radius: 0.5rem;
  font-size: 0.8rem;
`;

export const ProjectDescription = styled.p`
  text-align: justify;
  margin: 0.6rem 0;
  font-size: 0.9rem;

  @media screen and (max-width: 468px) {
    font-size: 0.8rem;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
`;

export const ProjectLink = styled.a`
  color: #01d85c;
  text-decoration: underline;
  transition: all 400ms ease;
  padding: 0.4rem 0.4rem;
  border-radius: 0.4rem;
  cursor: pointer;
  margin-right: 0.75rem;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    color: lightgray;
    background: #01d85c;
    color: #fff;
    border-color: transparent;
  }
`;
