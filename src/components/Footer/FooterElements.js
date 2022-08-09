import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0b3620;
`;

export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

    @media screen and (max-width: 710px){
        flex-direction: column;
    }
`;

export const FooterDescription = styled.h1`
  font-size: 1rem;
  color: #c0c0c0;

  @media screen and (max-width: 710px){
    margin: 1rem 0;
}

  @media screen and (max-width: 468px){
    font-size: .8rem;
    margin: 1rem 0;
}
`;

export const FooterLinks = styled.div`
    
`;

export const FooterLink = styled.a`
  color: #c0c0c0;
  font-size: 2.5rem;
  margin-bottom: 0.2rem;
  transition: all 0.2s ease-in-out;
  margin: 0 1.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01d85c;
  }
`;
