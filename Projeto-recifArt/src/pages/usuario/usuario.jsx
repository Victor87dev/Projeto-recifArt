import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Profile } from "../../components/image";
import { useEffect, useState } from "react";
import "./usuario.css";

const Usuario = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      }
    };

    checkLoggedInStatus();
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  const decodeJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64).split("").map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join("")
    );

    return JSON.parse(jsonPayload);
  };

  const pegarNomecPorToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeJwt(token);
      return decodedToken ? decodedToken.nomeC : null;
    }
    return null;
  };

  const pegarCnpjorCpfPorToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeJwt(token);
      return decodedToken ? decodedToken.id : null;
    }
    return null;
  };

  const pegarEmailPorToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeJwt(token);
      return decodedToken ? decodedToken.email : null;
    }
    return null;
  };

  return (
    <>
      <div className="container-usuario">
     <header className="header-usuario">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} setIsLoggedIn={setIsLoggedIn} />
      <h1>Informações pesoais</h1>
      </header>
        <div className="perfil-usuario">
          <img src={Profile} />

          <form>
            <label>Nome Completo:</label>
            <input type="text"  value={pegarNomecPorToken()} readOnly />
          </form>

          <form>
            <label>CNPJ:</label>
            <input type="text" value={pegarCnpjorCpfPorToken()} readOnly />
          </form>

          <form>
            <label>Email:</label>
            <input type="email"  value={pegarEmailPorToken()} readOnly />
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Usuario;