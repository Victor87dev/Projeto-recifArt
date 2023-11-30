import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Portfolio from "../../components/portfolio/portifolio";
import Footer from "../../components/Footer/Footer";
import ProdutoPortifolio from "../../components/produtoportifolio/ProdutoPortifolio";
import { Renato1, Tamandua, Ursos, Porta } from "../../components/image";
import "./perfil.css"

const Perfil = () => {
  const portifolio = [
    {
      img: Renato1,
      nome : "Renato Peixoto",
      whatsapp: "www.google.com",
      descricao: "Olá, sou Renato Peixoto, um artesão apaixonado por tricô e criação manual. Meu mundo é repleto de fios, agulhas e a magia de transformar esses elementos em peças únicas e acolhedoras.",
    },
    
  ];
  const cardProduto = [
    {
      img: Tamandua,
      produto: "Tamanduá Tallado",
    },
    {
      img: Ursos,
      produto: "Ursos sem Curso",
    },
    {
      img: Porta,
      produto: "Porta-Temperos",
    },
  ]
    return (
      <>
        <div id="container-perfil">
          <header className="header-perfil">
            <Navbar />
            <h1>Portfólio</h1>
          </header>
          
          <div className="perfil-user">

          {portifolio.map((port) => (
                <Portfolio
                  img={port.img}
                  nome={port.nome}
                  whatsapp={port.whatsapp}
                  descricao={port.descricao}
                />
              ))}
          </div>
          <div className="produto-grid">
            {cardProduto.map((card) => (
              <ProdutoPortifolio img={card.img} produto={card.produto} />
            ))}
          </div>
    
          <Footer />
        </div>
      </>
    );
  };
  export default Perfil;