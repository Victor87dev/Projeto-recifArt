import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Feirinha.css";

const Feirinha = () => {
  return (
    <>
      <div id="container-feirinha">
        <header className="header-feirinha">
          <Navbar />
          <h1>Conheça nossa Feirinha</h1>
        </header>
        <section className="sessao-feirinha">
          <div className="box-input">
            <input type="text" className="input-pesquisar" placeholder="Pesquisar..."/>
          </div>

          <div className="produtos-grid">
            
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};
export default Feirinha;
