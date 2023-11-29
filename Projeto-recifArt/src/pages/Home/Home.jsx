import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardColeta from "../../components/CardColeta/CardColeta";
import CardCriatividade from "../../components/CardCriatividade/CardCriatividade";
import { Video } from "../../components/video";
import "./Home.css";

import {
  Seguranca,
  Sustentabilidade,
  Inspiracao,
  Art,
  Compose,
  Sci,
  Green,
  Duck,
  Star,
} from "../../components/image";

const Home = () => {
  const cardsColeta = [
    {
      bairro: "Boa viagem",
    },
    {
      bairro: "Pina",
    },
    {
      bairro: "Candeias",
    },
  ];

  const cardsCriatividade = [
    {
      img: Inspiracao,
      titulo: "Inspiração",
      descricao:
        "a inspiração não é exclusiva para os artistas; é para todos que buscam um universo de criatividade. Explore nossa galeria diversificada para descobrir projetos que transcendem fronteiras e estimulam a imaginação.",
    },
    {
      img: Seguranca,
      titulo: "Segurança",
      descricao:
        "Na Recifarte, a segurança é nossa prioridade. Proporcionamos um ambiente digital protegido para artistas compartilharem suas obras. Explore a arte com tranquilidade em nossa plataforma segura e inspiradora.",
    },
    {
      img: Sustentabilidade,
      titulo: "Sustentabilidade",
      descricao:
        "Arte como transformação sustentável. Priorizamos projetos que promovem responsabilidade ambiental, cada criação é um passo para um mundo consciente. Faça parte da mudança explorando projetos que fazem a diferença.",
    },
  ];

  return (
    <>
      <div id="container-home">
        <header className="header-home">
          <Navbar />

          <section className="sessao-header">
            <video controls>
              <source src={Video} type="video/mp4" />
            </video>
            <p>
              Se você é um <span>artesão</span> em busca de visibilidade, uma{" "}
              <span>empresa</span> comprometida com a sustentabilidade ou alguém
              que simplesmente aprecia a beleza do <span>artesanato único</span>{" "}
              , o <span>RecifArt</span> é o lugar para você.
            </p>
            <a href="/artesoes"><button type="button" className="button-artesao top-fill">
              ARTESÃOS
            </button></a>
          </section>
        </header>
        <main>
          <section className="sessao-coleta reveal">
            <h1>
              Pontos de <span>Coleta.</span>
            </h1>
            <p className="descricao-coleta">
              Explore nossos pontos de coleta em três localidades-chave:{" "}
              <span>Boa viagem</span>, <span>Derby</span>, e nas{" "}
              <span>Graças</span>. Cada ponto é estrategicamente posicionado
              para proporcionar comodidade aos moradores e empresas locais
              interessados em adotar práticas sustentáveis.
            </p>

            <div className="box-coleta">
              {cardsColeta.map((card, index) => (
                <CardColeta key={index} bairro={card.bairro} />
              ))}
            </div>
          </section>

          <section className="sessao-coleta reveal">
            <h1>
              Criatividade com <span className="cor"> Sabedoria</span>
            </h1>
            <div className="box-criatividade">
              {cardsCriatividade.map((card, index) => (
                <CardCriatividade
                  key={index}
                  img={card.img}
                  titulo={card.titulo}
                  descricao={card.descricao}
                />
              ))}
            </div>
          </section>

          <div id="art" className="reveal">
            <div id="texto">
              <h1>
                Nasce a Recifart, entrelaçando <span className="cor">arte</span>{" "}
                e <span className="cor">sustentabilidade.</span>
              </h1>
              <p>
                A Recifart surge como solução para a baixa visibilidade e
                escassez de materiais enfrentadas por artesãos, além do desafio
                das empresas em lidar com seu lixo. Conectamos artesãos a
                materiais recicláveis de empresas locais, impulsionando a
                produção artesanal de forma sustentável e contribuindo para um
                descarte responsável. A Recifart representa um elo crucial entre
                a visibilidade dos artesãos e a demanda por práticas
                sustentáveis.
              </p>
            </div>
            <div id="img">
              <img src={Art} alt="artesao" />
            </div>
          </div>
          <div id="parceiros" className="reveal">
            <div id="titulo">
              <h1>
                Nossos <span className="cor">parceiros.</span>
              </h1>
            </div>
            <div id="elementos">
              <img src={Compose} alt="parceiro componse" className="empresa"/>
              <img src={Sci} alt="parceiro sci" className="empresa"/>
              <img src={Green} alt="parceiro green" className="empresa"/>
              <img src={Duck} alt="parceiro duck" className="empresa"/>
              <img src={Star} alt="parceiro star" className="empresa"/>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
