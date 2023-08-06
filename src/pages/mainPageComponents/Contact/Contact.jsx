import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact anchor-link">
      
      <h3 className="contact__title">Contato</h3>
      <p className="contact__text">
        Se você quiser entrar em contato comigo, sinta-se à vontade para fazê-lo
        através de um dos canais abaixo:
      </p>
      <div className="contact__info">
        <p>
          E-mail:{" "}
          <a href="mailto:leomiranda1997@gmail.com" rel="noopener noreferrer">
            leomiranda1997@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/LeonardoFMiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/LeonardoFMiranda
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/leonardo-f-miranda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/leonardo-f-miranda
          </a>
        </p>
      </div>
      
    </section>
  );
};

export default Contact;
