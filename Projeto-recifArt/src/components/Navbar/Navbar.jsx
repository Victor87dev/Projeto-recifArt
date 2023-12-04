import React, { useState } from "react";
import { Logo,Profile } from "../image";
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout ,setIsLoggedIn}) => {
 
  const [menuAberto, setMenuAberto] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  
  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));
    
    return JSON.parse(jsonPayload);
  };
  const pegarNomePorToken = () => {
    const token = localStorage.getItem("token"); 
    if (token) {
      const decodedToken = decodeJwt(token);
      return decodedToken ? decodedToken.nome : null;
    }
    return null;
  };

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

            <NavLink className="a-Azul" to="/feirinha">
              <li>Feirinha</li>
            </NavLink>            
            <NavLink className="a-Azul" to="/blog">
              <li>Blog</li>
            </NavLink>
            <NavLink className="a-Azul" to="/sobrenos">
              <li>Sobre nós</li>
            </NavLink>

          </ul>
          
          
          <div className={`buttons-header ${menuAberto ? "aberto" : ""} `}>
          
          { isLoggedIn ? (
            <>
            <div
              className="optionsLogin"
              onClick={() => setShowLogout(!showLogout)}
        
          
            >
              <img src={Profile}/> <p>{pegarNomePorToken()}</p> 
            </div>
            {showLogout && (
              <div className="showLogout">

              <a className="button-profile" href="/usuario" >
                Perfil
              </a>
              <button type="button" className="button-logout" onClick={() => {handleLogout();setIsLoggedIn(false);}}>
                Sair
              </button>
              </div>
            )}
          </>
        ) : (
            
            <>
              <a href="/escolhalog">
                <button type="button" className="button-entrar">
                  Entrar
                </button>
              </a>
              <a href="/escolhacad">
                <button type="button" className="button-cadastrar">
                  Cadastrar
                </button>
              </a>
            </>
          )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
