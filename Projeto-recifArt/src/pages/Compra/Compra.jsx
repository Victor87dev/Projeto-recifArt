import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardCompra from "../../components/CardCompra/CardCompra";
import "./Compra.css";

import { UrsoMetade, Renato} from "../../components/image";

const Compra = () => {
  const cardsCompra = [
    {
      img: UrsoMetade,
      titulo: "Ursos sem Curso",
      material: "Lã de alta qualidade",
      tamanho: "Aproximadamente 10 cm cada",
      cores: "Diversas opções disponíveis.",
      preco: "R$9,99",
      perfil: Renato,
      nome: "Renato Peixoto",
    },
  ];
  return (
    <>
      <div id="container-compra">
        <header className="header-compra">
          <Navbar />
          <h1>Finalizando Compra</h1>
        </header>
        <section className="sessao-compra reveal">
          <div className="box-compra">
            {cardsCompra.map((card) => (
              <CardCompra
                img={card.img}
                titulo={card.titulo}
                material={card.material}
                tamanho={card.tamanho}
                cores={card.cores}
                preco={card.preco}
                perfil={card.perfil}
                nome={card.nome}
              />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default Compra;
