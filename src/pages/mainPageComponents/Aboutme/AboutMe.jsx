import React from "react";
import "./AboutMe.css";
import aboutMeImg from "../../../assets/images/aboutMe__img.png";

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutMe anchor-link">
      
      <img src={aboutMeImg} alt="aboutMeimage" className="aboutMe__image" />
      <div className="aboutMe__info">
        <h3>Sobre Mim</h3>
        <h4>Desenvolvedor Frontend dedicado em busca de experiencia.</h4>
        <p>
          Minha jornada no mundo do desenvolvimento começou com a curiosidade e
          o desejo de criar experiências digitais cativantes. Desde então,
          mergulhei de cabeça no universo da programação, aprimorando minhas
          habilidades e explorando as mais recentes tecnologias para tornar a
          web mais interativa e envolvente.
        </p>
        <p>
          Minha paixão pelo Frontend se estende desde a escrita de código limpo
          e bem estruturado até a criação de designs responsivos e amigáveis ao
          usuário. Acredito que cada linha de código tem o poder de transformar
          ideias em realidade e, por isso, busco constantemente melhorar minha
          técnica e conhecimento.
        </p>
      </div>
      
    </section>
  );
};

export default AboutMe;
