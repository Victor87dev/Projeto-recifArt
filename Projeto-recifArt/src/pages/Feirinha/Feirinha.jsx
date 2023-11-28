import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProdutosFeirinha from "../../components/ProdutosFeirinha/ProdutosFeirinha";
import "./Feirinha.css";

import {
   Tamandua,
   Ursos,
   Porta,
   Mesa,
   Entalhes,
   Suporte,
   Luiz,
   Renato,
   Fabiana,
   Fernando,
   Gabriela,
   Renata,
 } from "../../components/image";

const Feirinha = () => {
  const cardsProduto = [
    {
      img: Tamandua,
      produto: "Tamanduá Tallado",
      preco: "R$39,99",
      perfil: Luiz,
      nome: "Luiz Alberto",
    },
    {
      img: Ursos,
      produto: "Ursos sem Curso",
      preco: "R$9,99",
      perfil: Renato,
      nome: "Renato Peixoto",
    },
    {
      img: Porta,
      produto: "Porta-Temperos",
      preco: "R$9,99",
      perfil: Fabiana,
      nome: "Fabiana Marques",
    },
    {
      img: Mesa,
      produto: "Mesa em Madeira",
      preco: "R$49,99",
      perfil: Fernando,
      nome: "Fernando Texeira",
    },
    {
      img: Entalhes,
      produto: "Entalhes do Coração",
      preco: "R$29,99",
      perfil: Gabriela,
      nome: "Gabriela Rodrigues",
    },
    {
      img: Suporte,
      produto: "Suporte Criativo",
      preco: "R$9,99",
      perfil: Renata,
      nome: "Renata Melo",
    },
  ];

  return (
    <>
      <div id="container-feirinha">
        <header className="header-feirinha">
          <Navbar />
          <h1>Conheça nossa Feirinha</h1>
        </header>
        <main>

        <section className="sessao-feirinha">
          <div className="box-input">
            <input
              type="text"
              className="input-pesquisar"
              placeholder="Pesquisar..."
            />
          </div>

          <div className="produtos-grid">
            {cardsProduto.map((card) => (
              <ProdutosFeirinha img={card.img} produto={card.produto} preco={card.preco} perfil={card.perfil} nome={card.nome}/>
            ))}
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </>
  );
};
export default Feirinha;
