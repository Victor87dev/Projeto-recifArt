import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardArtesoes from "../../components/CardArtesoes/CardArtesoes";
import "./Artesoes.css";

import {
  Mequias,
  Nicolai,
  Sarah,
  Thamires,
  Lucio,
  Mario,
  Lee,
} from "../../components/image";

const Artesoes = () => {
  const cardsArtesoes = [
    {
      img: Mequias,
      nome: "Mequias Sampaio",
      descricao:
        "Mequias Sampaio é um Artesão de 34 anos, e tem como especialidade peças de madeira",
    },
    {
      img: Nicolai,
      nome: "Nicolai Figueroa",
      descricao:
        "Nicolai Figueroa, é uma artesã a 5 anos, tem como especialidade bijuterias",
    },
    {
      img: Sarah,
      nome: "Sarah Maria",
      descricao:
        "Sarah Maria, tem 22 anos, está iniciando no artesanato e se identificando com a área",
    },
    {
      img: Thamires,
      nome: "Thamires Reis",
      descricao:
        "Thamires Reis, com 20 anos, é artesã desde os 18 e tem como especialidade bordados",
    },
    {
      img: Lucio,
      nome: "Lucio Flávio",
      descricao:
        "Lucio Flávio, é artesão a 35 anos, tem muitas especialidades e hoje em dia faz de tudo na área",
    },
    {
      img: Lee,
      nome: "Lee Heung-min",
      descricao:
        "Lee Heung-min, tem 37 anos, é artesão desde os 24 anos, adquiriu como especialidade brinquedos",
    },
  ];

  return (
    <>
      <div id="container-artesoes">
        <header className="header-artesoes">
          <Navbar />
          <h1 className="titulo-artesoes">Artesãos</h1>
        </header>

        <section className="sessao-artesoes">
          <div className="produtos-grid-artesoes">
            {cardsArtesoes.map((card) => (
              <CardArtesoes
                img={card.img}
                nome={card.nome}
                descricao={card.descricao}
              />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Artesoes;
