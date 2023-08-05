import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #121212;
  height: 90vh;
  padding: 6rem 1.5rem 0 1.5rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    height: auto;
  }
`;

export const AboutTitle = styled.h3`
  text-align: center;
  padding: 1rem 0 1rem 0;
  font-size: 2rem;
  color: #01d85c;

`;

export const AboutWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 2rem;
  justify-content: center;
  color: #fff;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 460px) {
    padding: .5rem;
  }
`;

export const Column1 = styled.div`
  width: 50%;
  height: 70%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export const TextWrapper = styled.p`
  text-align: justify;
  font-size: .95rem;
  margin: 0 2rem;

  @media screen and (max-width: 1200px) {
    font-size: .9rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 460px) {
    padding: .5rem;
  }
`;

export const Column2 = styled.div`
  width: 50%;
  height: 70%;
  margin: 0 2rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  align-item: center;
`;
export const Img = styled.img`
  width: 100%;
  transform: scale(0.75);
`;
