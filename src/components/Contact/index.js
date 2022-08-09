import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Container } from "./ContactElements";

const serviceID = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceID}`, `${templateID}`, form.current, `${publicKey}`)
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Container id="contato">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Fale comigo!</h2>
          <div className="app__form__group">
            <input
              className="app__form__control"
              type="text"
              name="user_name"
              placeholder="NOME"
            />
          </div>
          <div className="app__form__group">
            <input
              className="app__form__control"
              type="email"
              name="user_email"
              placeholder="EMAIL"
            />
          </div>
          <div className="app__form__group">
            <textarea
              className="app__form__control message"
              name="message"
              placeholder="MENSAGEM"
            />
          </div>
          <div className="app__form__button">
            <input id="botao" type="submit" value="ENVIAR" />
          </div>
        </form>
      </Container>
    </>
  );
}

export default ContactSection;
