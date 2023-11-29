import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardMissao from "../../components/CardMissao/CardMissao";
import Integrantes from "../../components/Integrantes/Integrantes";
import Footer from "../../components/Footer/Footer";
import "./Sobre.css";

import {
  Recife,
  Artesao,
  Ideia,
  Reciclagem,
  Conexao,
  Joao,
  Paulo,
  Leticia,
  Saulo,
  Vinicius,
} from "../../components/image"
import { FaGithub } from "react-icons/fa";
const Sobre = () => {

  const cardsMissao = [
    {
      img: Conexao,
      titulo: "Conexão",
      descricao: "RecifArt está dedicada não apenas a criar uma vitrine digital, mas também a promover uma conexão entre esses talentos, empresas e usuários.",
    },
    {
      img: Reciclagem,
      titulo: "Reciclagem",
      descricao: "RecifArt promove a reciclagem sustentável, auxiliando empresas com opções de descarte e educando usuários sobre pontos de coleta."

    },
    {
      img: Ideia,
      titulo: "Inspirar",
      descricao: "A RecifArt tem como objetivo inspirar usuários, oferecendo ideias criativas para reutilizar seu lixo, e educá-los sobre práticas sustentáveis que contribuem para um futuro mais verde."
    },

  ]

  const integrantes = [
    {
      img: Joao,
      nome: "João Victor",
      area: "Desenvolvedor Front-End",
      Likendin: "https://www.linkedin.com/in/victor-dev87/",
      github: "https://github.com/Victor87dev",
      Instagram: "https://www.instagram.com/joaov77_/",
    },
    {
      img: Saulo,
      nome: "Saulo França",
      area: "Desenvolvedor Front-End",
      Likendin: "https://www.linkedin.com/in/saulo-fran%C3%A7a-57a96421a/",
      github: "https://github.com/saulojlf",
      Instagram: "https://www.instagram.com/saulotron93/",
    },
    {
      img: Paulo,
      nome: "Paulo Junior",
      area: "Desenvolvedor Front-End",
      Likendin: "https://www.linkedin.com/in/paulojr-r/",
      github: "https://github.com/pauloJ-r",
      Instagram: "https://www.instagram.com/paulojr_r/",
    },
    {
      img: Vinicius,
      nome: "Vinicius Rodrigues",
      area: "Desenvolvedor Front-End",
      Likendin: "https://www.linkedin.com/in/vinicius-rodrigues-32ab75210/",
      github: "https://github.com/ViniciusCR7",
      Instagram: "https://www.instagram.com/viniciusrss_/",
    },
    {
      img: Leticia,
      nome: "Leticia Moraes",
      area: "Desenvolvedor Front-End",
      Likendin: "http://linkedin.com/in/leticia-moraes-barbosa",
      github: "https://github.com/Leticia1508",
      Instagram: "https://instagram.com/leticia_moraes0",
    },

  ]

  return (
    <>
      <div id="container-sobre">
        <header className="header-sobre">
          <Navbar />
          <h1>Sobre nós</h1>
        </header>
        <div className="sobre-recifart reveal">
          <p>
            Seja bem-vindo ao RecifArt, sua plataforma dedicada à valorização
            dos artesãos locais e à promoção de práticas sustentáveis em Recife.
            Somos mais que um site, somos uma comunidade comprometida com
            o fortalecimento da economia local e a preservação do meio ambiente.
          </p>
        </div>

        <div className="missaobloco reveal">
          <div className="texto-missao">
            <h1>Missão</h1>
            <p>
              Conectar, Inspirar e Transformar. Nossa missão é proporcionar uma
              vitrine digital para artesãos, promovendo suas habilidades únicas,
              <br /> impulsionando o desenvolvimento sustentável em Recife e
              facilitando pontos de coleta para fortalecer ainda mais nossa
              comunidade.
            </p>
          </div>
          <div className="imagens">
            <img src={Recife} alt="recifeantigo" />
            <img src={Artesao} alt="Artesão" />
          </div>
     <div className="icones reveal">
          {cardsMissao.map((card, index) => (
                <CardMissao
                  key={index}
                  img={card.img}
                  titulo={card.titulo}
                  descricao={card.descricao}
                />
              ))}
              </div>
      
        </div>

        <div className="tituloequipe reveal">
          <h1>Nossa <span className="Azul">equipe</span></h1>
          <p>
            Na RecifArt, nossa força reside na diversidade e talento de nossa
            equipe apaixonada. Cada membro é uma peça fundamental na construção
            da visão que temos para Recife: uma cidade vibrante, sustentável e
            culturalmente rica. Conheça as mentes criativas por trás da
            RecifArt:
          </p>
        </div>

        <div className="equipe reveal">
        {integrantes.map((integrantes, index) => (
                <Integrantes
                  key={index}
                  img={integrantes.img}
                  nome={integrantes.nome}
                  area={integrantes.area}
                  Likendin={integrantes.Likendin}
                  github={integrantes.github}
                  Instagram={integrantes.Instagram}
                />
              ))}
          
        </div>

        <Footer />
      </div>

    </>
  );
};
export default Sobre;
