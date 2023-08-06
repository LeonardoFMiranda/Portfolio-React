import React from "react";
import "./Projects.css";
import containerImg03 from "../../../assets/images/portfolioImages/HBO__Img.png";
import containerImg02 from "../../../assets/images/portfolioImages/Pokedex__Img.png";
import containerImg01 from "../../../assets/images/portfolioImages/Cafezim_img.png";

import { LuScreenShare } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <section id="projects" className="projects anchor-link">
      <h3 className="projects__title">Portfolio</h3>
      <h4>
        Cada projeto é criado para aprimorar minhas habilidades na programação.
      </h4>
      <div className="project__container">
        <img src={containerImg01} alt="" className="project__image" />
        <div className="project__info">
          <h3>Loja de Café</h3>
          <p>
            Este projeto foi desenvolvido usando o framework Bootstrap para
            criar uma interface moderna e responsiva. Possui carousel no inicio
            para exibir possiveis imagens do estabelecimento ou produtos e
            também possui cards para cada produto da loja.
          </p>
          <div className="share__icons">
            <a
              href="https://github.com/LeonardoFMiranda/CafezimVirtual"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://leonardofmiranda.github.io/CafezimVirtual/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <LuScreenShare />
            </a>
          </div>
        </div>
      </div>
      <div className="project__container">
        <img src={containerImg02} alt="" className="project__image" />
        <div className="project__info">
          <h3>Pokedex</h3>
          <p>
            Pokedex interativa para visualizar informações e detalhes sobre
            Pokémons. Utiliza HTML, CSS, JavaScript e API de Pokémons. Este
            projeto foi criado para aprender um pouco mais sobre API's.
          </p>
          <div className="share__icons">
            <a
              href="https://github.com/LeonardoFMiranda/Pokedex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://leonardofmiranda.github.io/Pokedex/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <LuScreenShare />
            </a>
          </div>
        </div>
      </div>
      <div className="project__container">
        <img src={containerImg03} alt="" className="project__image" />
        <div className="project__info">
          <h3>HBO réplica</h3>
          <p>
            Página clone da HBO MAX,com o intuito de reproduzir a interface, com
            algumas modificações, aplicando todo o conhecimento de CSS aprendido
            na plataforma da Digital Innovation One.
          </p>
          <div className="share__icons">
            <a
              href="https://github.com/LeonardoFMiranda/HBO-Replica"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <FaGithub />
            </a>
            <a
              href="https://leonardofmiranda.github.io/HBO-Replica/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <LuScreenShare />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
