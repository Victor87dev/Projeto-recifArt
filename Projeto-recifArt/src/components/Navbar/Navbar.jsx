import React from 'react'
import { Logo } from '../image';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <img src={Logo} alt="" />
     <ul>
            <a href="">
              <li>Marktplace</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="/sobrenos">
              <li>Sobre nós</li>
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
    </>
  )
}

export default Navbar