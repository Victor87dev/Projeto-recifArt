import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../components/portfolio/portifolio";
import Footer from "../../components/Footer/Footer";
import { Renato } from "../../components/image";
import "./perfil.css"

const Perfil = () => {
  const portfolio = [
    {
      img: Renato,
    },
  ];
    return (
      <>
        <div id="container-perfil">
          <header className="header-perfil">
            <Navbar />
            <h1>Portfólio</h1>
          </header>
          <div>
          {portfolio.map((portfolio) => (
                <Portfolio
                  img={portfolio.img}
                />
              ))}
          </div>
          <Footer />
        </div>
      </>
    );
  };
  export default Perfil;