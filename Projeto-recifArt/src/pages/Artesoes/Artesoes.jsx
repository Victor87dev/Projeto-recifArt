import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardArtesoes from "../../components/CardArtesoes/CardArtesoes";
import "./Artesoes.css";

import { Mequias } from "../../components/image";

const Artesoes = () => {

    const cardsArtesoes = [
        {
          img: Mequias,
          nome: "Mequias Sampaio",
          descricao: ""
        },
      ];

  return (
    <>
      <div id="container-artesoes">
        <header className="header-artesoes">
          <Navbar />
          <h1 className="titulo-artesoes">Artesões</h1>
        </header>

        <section className="sessao-artesoes">

          <div className="produtos-grid">
          {cardsArtesoes.map((card) => (
              <CardArtesoes img={card.img} />
            ))}
          </div>

        </section>

        <Footer />
      </div>
    </>
  );
};

export default Artesoes;