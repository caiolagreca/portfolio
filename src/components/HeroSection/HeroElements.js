import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (min-width: 1800px){
    margin-top: -80px;
    height: 110vh;

  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3rem;
  
`;

export const HeroTitle = styled.div`
  text-align: start;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HeroStrong = styled.strong`
  color: #02de48;
`;

export const HeroH2 = styled.h2`
  color: #02de48;
  font-size: 2rem;
  margin-top: .5rem;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroPhoto = styled.img`
  width: 30%;
  height: 50%;
  border-radius: 50%;
  border: 20px solid rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 10px 10px black;
  margin-left: 5rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HeroInfos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const HeroLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    color: #02de48;
`;

export const HeroLink = styled.a`
color: #fff;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #02de48;
  }
`;
