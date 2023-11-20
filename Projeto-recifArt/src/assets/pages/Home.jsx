import React from "react";
import "../css/Home.css";
import Navbar from "../components/Navbar";
import CardColeta from "../components/cardColeta";
import Logo from "../img/LOGO.svg";
import Video from "../video/pitch.mp4";
import BoaViagem from "../img/boaViagem.png";
import Derby from "../img/derby.png";
import Gracas from "../img/gracas.png";
import Seguranca from "../img/seguranca.png";
import Sustentabilidade from "../img/sustentabilidade.png";
import Inspiracao from "../img/inspiracao.png";
import Art from "../img/IMG.png";
import Compose from "../img/Compose.png";
import Sci from "../img/SCi FI.png";
import Green from "../img/Green Sun.png";
import Duck from "../img/Duck Pond.png";
import Star from "../img/StarFox.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const Home = () => {
  const cardsColeta = [
    {
      bairro: "Boa viagem",
    },
    {
      bairro: "pina",
    },
    {
      bairro: "candeias",
    },
  ];
  return (
    <>
      <header>
        <nav>
          <img src={Logo} alt="" />
          <ul>
            <a href="">
              <li>Marktplace</li>
            </a>
            <a href="">
              <li>Blog</li>
            </a>
            <a href="sobrenos.html">
              <li>Sobre nós</li>
            </a>
          </ul>

          <div class="mobile_menu_icon">
            <button class="btn_menu_mobile" onclick="menuShow()">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>

          <div className="buttons-header">
            <button type="button" className="button-entrar">
              Entrar
            </button>
            <button type="button" className="button-cadastrar">
              Cadastrar
            </button>
          </div>
        </nav>

        <div class="mobile_menu">
          <a href="">
            <li>Marktplace</li>
          </a>
          <a href="">
            <li>Blog</li>
          </a>
          <a href="">
            <li>Sobre nós</li>
          </a>
        </div>

        <section className="sessao-header">
          <video width="700" controls>
            <source src={Video} type="video/mp4" />
          </video>
          <p>
            Se você é um <span>artesão</span> em busca de visibilidade, uma{" "}
            <span>empresa</span> comprometida com a sustentabilidade ou alguém
            que simplesmente aprecia a beleza do <span>artesanato único</span> ,
            o <span>Recifart</span> é o lugar para você.
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
            <span>Graças</span>. Cada ponto é estrategicamente posicionado para
            proporcionar comodidade aos moradores e empresas locais interessados
            em adotar práticas sustentáveis.
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
                a inspiração não é exclusiva para os artistas; é para todos que
                buscam um universo de criatividade. Explore nossa galeria
                diversificada para descobrir projetos que transcendem fronteiras
                e estimulam a imaginação.
              </p>
            </div>
            <div class="item-2">
              <img src={Seguranca} alt="" />
              <h2>Segurança</h2>
              <p>
                Na Recifarte, a segurança é nossa prioridade. Proporcionamos um
                ambiente digital protegido para artistas compartilharem suas
                obras. Explore a arte com tranquilidade em nossa plataforma
                segura e inspiradora.
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
              A Recifart surge como solução para a baixa visibilidade e escassez
              de materiais enfrentadas por artesãos, além do desafio das
              empresas em lidar com seu lixo. Conectamos artesãos a materiais
              recicláveis de empresas locais, impulsionando a produção artesanal
              de forma sustentável e contribuindo para um descarte responsável.
              A Recifart representa um elo crucial entre a visibilidade dos
              artesãos e a demanda por práticas sustentáveis.
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

      <footer>
        <div class="footer_media">
          <div class="footer_media_logo">
            <img src={Logo} alt="" />
          </div>
          <div class="footer_media_email">
            <div class="footer_media_email_label">
              <span>Contatos</span>
              <span class="ponto_verde"></span>
            </div>

            <div class="contatos">
              <ul>
                <li>(81) 9-9999-9999</li>
                <li>Rua da pera, 214 -pina</li>
                <li>Pernambuco-PE</li>
              </ul>
            </div>
          </div>
          <div class="footer_media_socialmedia">
            <p>
              Colaboramos com Empresas e artesãos ambiciosos. vamos nos
              conectar.
            </p>
            <ul>
              <li>
                <span class="ponto_verde"></span>
                <span>Social</span>
              </li>

              <li>
                <FaInstagram style={{ color: "purple" }} />
                <span>Instagram</span>
              </li>
              <li>
                <FaTwitter style={{ color: "aquamarine" }} />
                <span>twitter</span>
              </li>
              <li>
                <FaFacebook style={{ color: "blue" }} />
                <span>facebook</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_contatos">
          <h3>Recifart</h3>
          <button>Entre em contato</button>
        </div>
        <div class="footer_copyright">
          © 2023 Direitos reservados para o RecifArt.
        </div>
      </footer>
    </>
  );
};

export default Home;
