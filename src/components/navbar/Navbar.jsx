import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar ">
      <h3>Leonardo.dev</h3>

      <ul className="menu">
        <li>
          <a href="#home" className="anchor-link">
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" className="anchor-link">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#projects" className="anchor-link">
            Projetos
          </a>
        </li>
        <li>
          <a href="#contact" className="anchor-link">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
