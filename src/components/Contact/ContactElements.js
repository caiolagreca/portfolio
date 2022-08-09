import styled from "styled-components";

export const Container = styled.div`
  height: 95vh;
  background: linear-gradient(#121212, #0b3620);
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 4rem 1.5rem 0 1.5rem;

  @media screen and (max-width: 960px) {
    height: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #010101;
    width: 40rem;
    margin: 2rem 0 1rem 0;
    height: auto;
    padding: 3rem 3rem;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  }

  h2 {
    text-align: center;
    margin: 2.5rem 0 1.5rem 0;
    font-size: 2rem;
    color: #01d85c;
  }

  .app__form__group {
    margin-bottom: 1.5rem;
  }

  .app__form__group .message {
    margin-top: 2rem;
  }

  .app__form__control {
    width: 100%;
    padding: .7rem 0;
    background: none;
    border: none;
    border-bottom: 1px solid #666;
    color: #ddd;
    font-size: .9rem;
    outline: none;
    transition: border-color 0.2s;
  }

  .app__form__control:focus {
    border-bottom-color: #ddd;
  }

  .app__form__button{
    display: flex;
    justify-content: center;
    margin: 1rem 0 2.5rem 0;
  }

  #botao {
    background: transparent;
    border: 1px solid #01d85c;
    color: #01d85c;
    font-weight: bold;
    padding: 1rem 3rem;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
  }

  #botao:hover{
    background: #01d85c;
    color: #010101;
    transition: all .3s ease-in-out;
    transform: scale(1.1);
  }
`;
