import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../components/portfolio/portifolio";
import Footer from "../../components/Footer/Footer";
import "./perfil.css"

const Perfil = () => {

    return (
      <>
        <div id="container-perfil">
          <header className="header-perfil">
            <Navbar />
            <h1>Portfolio</h1>
          </header>
           <Portfolio	/>
          <Footer />
        </div>
      </>
    );
  };
  export default Perfil;