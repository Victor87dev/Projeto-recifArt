import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardColeta from "../../components/CardColeta/CardColeta";
import { Video } from "../../components/video";
import "./Home.css";

import {
  Gracas,
  Derby,
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

  return (
    <>
      <div id="container-home">
        <header>
          <Navbar />

          <section className="sessao-header">
            <video width="700" controls>
              <source src={Video} type="video/mp4" />
            </video>
            <p>
              Se você é um <span>artesão</span> em busca de visibilidade, uma{" "}
              <span>empresa</span> comprometida com a sustentabilidade ou alguém
              que simplesmente aprecia a beleza do <span>artesanato único</span>{" "}
              , o <span>Recifart</span> é o lugar para você.
            </p>
            <button type="button" className="button-artesao top-fill">
              ARTESÕES
            </button>
          </section>
        </header>
        <main>
          <section class="sessao-coleta">
            <h1>
              Pontos de <span>Coleta.</span>
            </h1>
            <p>
              Explore nossos pontos de coleta em três localidades-chave:{" "}
              <span>Boa viagem</span>, <span>Derby</span>, e nas{" "}
              <span>Graças</span>. Cada ponto é estrategicamente posicionado
              para proporcionar comodidade aos moradores e empresas locais
              interessados em adotar práticas sustentáveis.
            </p>

            <div class="box-coleta">
              {cardsColeta.map((card) => (
                <CardColeta bairro={card.bairro} />
              ))}
            </div>
          </section>

          <section class="sessao-coleta">
            <h1>
              Criatividade com <span class="cor"> Sabedoria</span>
            </h1>
            <div class="flexbox">
              <div class="item-1">
                <img src={Inspiracao} alt="" />
                <h2>Inspiração</h2>
                <p>
                  a inspiração não é exclusiva para os artistas; é para todos
                  que buscam um universo de criatividade. Explore nossa galeria
                  diversificada para descobrir projetos que transcendem
                  fronteiras e estimulam a imaginação.
                </p>
              </div>
              <div class="item-2">
                <img src={Seguranca} alt="" />
                <h2>Segurança</h2>
                <p>
                  Na Recifarte, a segurança é nossa prioridade. Proporcionamos
                  um ambiente digital protegido para artistas compartilharem
                  suas obras. Explore a arte com tranquilidade em nossa
                  plataforma segura e inspiradora.
                </p>
              </div>
              <div class="item-3">
                <img src={Sustentabilidade} alt="" />
                <h2>Sustentabilidade</h2>
                <p>
                  Arte como transformação sustentável. Priorizamos projetos que
                  promovem responsabilidade ambiental, cada criação é um passo
                  para um mundo consciente. Faça parte da mudança explorando
                  projetos que fazem a diferença.
                </p>
              </div>
            </div>
          </section>

          <div id="art">
            <div id="texto">
              <h1>
                Nasce a Recifart, entrelaçando <span class="cor">arte</span> e{" "}
                <span class="cor">sustentabilidade.</span>
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
              <div id="art-botao">
                <button>Artesãos</button>
              </div>
            </div>
            <div id="img">
              <img src={Art} alt="" />
            </div>
          </div>
          <div id="parceiros">
            <div id="titulo">
              <h1>
                Nossos <span class="cor">parceiros.</span>
              </h1>
            </div>
            <div id="elementos">
              <img src={Compose} alt="" />
              <img src={Sci} alt="" />
              <img src={Green} alt="" />
              <img src={Duck} alt="" />
              <img src={Star} alt="" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
