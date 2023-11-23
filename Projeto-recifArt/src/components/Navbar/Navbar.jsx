import React from "react";
import { Logo } from "../image";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="" />
        <ul>
          <a href="/sobrenos">
            <li>Sobre nós</li>
          </a>
          <a href="/blog">
            <li>Blog</li>
          </a>
          <a href="/feirinha">
            <li>Feirinha</li>
          </a>
        </ul>
        <div className="buttons-header">
          <button type="button" className="button-entrar">
            Entrar
          </button>
          <button type="button" className="button-cadastrar">
            Cadastrar
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
