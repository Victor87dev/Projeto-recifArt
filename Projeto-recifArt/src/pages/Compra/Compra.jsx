import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Compra.css";

const Compra = () => {
  return (
    <>
      <div id="container-compra">
        <header className="header-compra">
          <Navbar />
          <h1>Finalizando Compra</h1>
        </header>
        <Footer />
      </div>
    </>
  );
};
export default Compra;
