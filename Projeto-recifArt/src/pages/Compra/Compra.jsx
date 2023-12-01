import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardCompra from "../../components/CardCompra/CardCompra";
import "./Compra.css";
import { useEffect,useState } from 'react';

import { Ursos, Renato} from "../../components/image";

const Compra = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    };
  
    checkLoggedInStatus();
  }, []);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const cardsCompra = [
    {
      img: Ursos,
      titulo: "Ursos sem Curso",
      material: "Lã de alta qualidade",
      tamanho: "10 cm cada",
      cores: "Todas disponíveis",
      preco: "R$9,99",
      perfil: Renato,
      nome: "Renato Peixoto",
    },
  ];
  return (
    <>
      <div id="container-compra">
        <header className="header-compra">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} setIsLoggedIn={setIsLoggedIn} />
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
