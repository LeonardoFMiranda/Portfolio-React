import React from "react";
import "./MainPage.css";
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import htmlLogo from "../assets/images/html-logo.png";
import cssLogo from "../assets/images/css-logo.png";
import jsLogo from "../assets/images/js.png";
import reactLogo from "../assets/images/react.png";
import typeLogo from "../assets/images/Typescript.svg";
import AboutMe from "./mainPageComponents/Aboutme/AboutMe"
import Projects from "./mainPageComponents/Projects/Projects";
import Contact from "./mainPageComponents/Contact/Contact";

const MainPage = () => {
  return (
    <>
      <section id="home" className="home__section anchor-link">
        <img
          src="https://avatars.githubusercontent.com/u/107367947?v=4"
          alt="MyPhoto"
          className="profilePhoto"
        />
        <h2>Desenvolvedor Frontend</h2>
        <p>
          Bem-vindo! Sou Leonardo Miranda, Desenvolvedor Frontend de Natal, RN{" "}
          <FaMapMarkerAlt />.
        </p>
        <div className="myLinks">
          <a
            href="https://github.com/LeonardoFMiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size="2rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-f-miranda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size="2rem" />
          </a>
        </div>
        <div className="tech__stack">
          <h3>Tech Stack</h3>
          <ul className="tech__list">
            <li className="tech__item">
              <img src={htmlLogo} alt="htmlLogo" className="techLogo" />
            </li>
            <li className="tech__item">
              <img src={cssLogo} alt="cssLogo" className="techLogo" />
            </li>
            <li className="tech__item">
              <img src={jsLogo} alt="jsLogo" className="techLogo" />
            </li>
            <li className="tech__item">
              <img src={reactLogo} alt="reactLogo" className="techLogo" />
            </li>
            <li className="tech__item">
              <img src={typeLogo} alt="tyscriptLogo" className="techLogo" />
            </li>
          </ul>
        </div>
      </section>
      <AboutMe />
      <Projects/>
      <Contact/>
    </>
  );
};

export default MainPage;
