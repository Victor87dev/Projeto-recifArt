import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./perfil.css"

const Perfil = () => {

    return (
      <>
        <div id="container-perfil">
          <header className="header-perfil">
            <Navbar />
          </header>
  
          <Footer />
        </div>
      </>
    );
  };
  export default Perfil;