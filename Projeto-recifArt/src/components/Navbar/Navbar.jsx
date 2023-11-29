import React, { useState } from "react";
import { Logo } from "../image";
import "./Navbar.css";

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <nav>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="menu" onClick={() => {
          setMenuAberto(!menuAberto);
        }}>
          <span className="navAzul"></span>
          <span className="navAzul"></span>
          <span className="navAzul"></span>
        </div>

        <div className={`menu-conteudo ${menuAberto ? "aberto" : ""}`}>
          <ul className={menuAberto ? "aberto" : ""}>
            <NavLink className="a-Azul" to="/sobrenos">
              <li>Sobre nós</li>
            </NavLink>
            <NavLink className="a-Azul" to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink className="a-Azul" to="/feirinha">
              <li>Feirinha</li>
            </NavLink>
          </ul>
          <div className={`buttons-header ${menuAberto ? "aberto" : ""} `}>
           <a href=""><button type="button" className="button-entrar">
              Entrar
            </button>
            </a>
         <a href=""> <button type="button" className="button-cadastrar">
              Cadastrar
            </button>
            </a> 
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
