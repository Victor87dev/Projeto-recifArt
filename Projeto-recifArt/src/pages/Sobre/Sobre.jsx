import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardMissao from "../../components/CardMissao/CardMissao";
import Footer from "../../components/Footer/Footer";
import "./Sobre.css";

import{
   Recife,
   Artesao,
    Ideia,
    Reciclagem,
    Conexao,
} from "../../components/image"
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


  return (
    <>
      <div id="container-sobre">
        <header className="header-sobre">
          <Navbar />
            <h1>Sobre nós</h1>
        </header>
        <div className="sobre-recifart">
          <p>
            Seja bem-vindo ao RecifArt, sua plataforma dedicada à valorização
            dos artesãos locais e à promoção de práticas sustentáveis em Recife.
            Somos mais que um site, somos uma comunidade comprometida com
            o fortalecimento da economia local e a preservação do meio ambiente.
          </p>
        </div>

        <div className="missaobloco">
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
     <div className="icones">
          {cardsMissao.map((card) => (
                <CardMissao
                  img={card.img}
                  titulo={card.titulo}
                  descricao={card.descricao}
                />
              ))}
              </div>
      
        </div>

        <div class="tituloequipe">
          <h1>Nossa equipe</h1>
          <p>
            Na RecifArt, nossa força reside na diversidade e talento de nossa
            equipe apaixonada. Cada membro é uma peça fundamental na construção
            da visão que temos para Recife: uma cidade vibrante, sustentável e
            culturalmente rica. Conheça as mentes criativas por trás da
            RecifArt:
          </p>
        </div>

        <div class="equipe">
          <div class="integrante">
            <img src="imgsobrenos/fotosaulo.jpg" alt="" />
            <h1>Saulo França</h1>
            <p>Estudante Frontend</p>
            <img src="imgsobrenos/iconeredesocial.svg" alt="" />
          </div>

          <div class="integrante">
            <img src="imgsobrenos/fotopaulo.jpg" alt="" />
            <h1>Paulo Junior</h1>
            <p>Estudante Frontend</p>
            <img src="imgsobrenos/iconeredesocial.svg" alt="" />
          </div>

          <div class="integrante">
            <img src="imgsobrenos/fotoleticia.jpg" alt="" />
            <h1>Leticia Moraes</h1>
            <p>Estudante Frontend</p>
            <img src="imgsobrenos/iconeredesocial.svg" alt="" />
          </div>

          <div class="integrante">
            <img src="imgsobrenos/fotovinicius.jpg" alt="" />
            <h1>Vinicius Rodrigues</h1>
            <p>Estudante Frontend</p>
            <img src="imgsobrenos/iconeredesocial.svg" alt="" />
          </div>

          <div class="integrante">
            <img src="imgsobrenos/fotojoao.jpg" alt="" />
            <h1>João Victor</h1>
            <p>Estudante Frontend</p>
            <img src="imgsobrenos/iconeredesocial.svg" alt="" />
          </div>
        </div>
        
      <Footer />
      </div>
      
    </>
  );
};
export default Sobre;
