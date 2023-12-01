import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CardCriatividade from "../../components/CardCriatividade/CardCriatividade";
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { FaRegClock } from "react-icons/fa";
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import { Video } from "../../components/video";
import { NavLink } from 'react-router-dom';

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
  Logo,
} from "../../components/image";

const Home = () => {


  const cardsCriatividade = [
    {
      img: Inspiracao,
      titulo: "Inspiração",
      descricao:
        "A inspiração não é exclusiva para os artistas; é para todos que buscam um universo de criatividade. Explore nossa galeria diversificada para descobrir projetos que transcendem fronteiras e estimulam a imaginação.",
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

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

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
              Explore nossos pontos de coleta em várias localidades-chave, como:{" "}
              <span>Boa viagem</span>, <span>Joana Bezerra</span>,{" "}
              <span>Vila Popular</span>, etc. Cada ponto é estrategicamente posicionado
              para proporcionar comodidade aos moradores e empresas locais
              interessados em adotar práticas sustentáveis.
            </p>
            <section className="container-mapa">
            <div id="mapa">
              <MapContainer center={[-8.05687703365518, -34.88305617720092]} zoom={13} >
                <TileLayer
                  
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-8.016825460361233, -34.8633908435154]}>
                  <Popup>
                   <strong>Planeta Limpo Recicláveis</strong> <br />
                   <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/zMy3SWPMx84g4n3C7" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                  </Popup>
                  <Marker position={[-8.025337882276741, -34.875108899999994]}>
                    <Popup>
                      <strong>Recicla Tratamento de Resíduos LTDA</strong> <br/>
                      <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/CeXPwo2n58afAQW48" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.033852953343633, -34.878521875154625]}>
                    <Popup>
                     <strong>Ecoestação Campo Grande</strong><br/>
                     <FaRegClock />  Horário: 7h a 16h <br/>
                   <a href="https://maps.app.goo.gl/oaLXG2wXxxPaN4gk6" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.039017570578268, -34.95238247509206]}>
                    <Popup>
                     <strong>Nordeste Ambiental Reciclagem Boa Viagem</strong><br/>
                     <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/26SEMhAtSZM6PqVs7" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.077768455704135, -34.971780741522416]}>
                    <Popup>
                     <strong>Ecoestação Totó</strong><br/>
                     <FaRegClock />  Horário: 7h a 16h <br/>
                   <a href="https://maps.app.goo.gl/SdJRHfL4ZSxZPEUX7" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.088753447641468, -34.89150888650784]}>
                    <Popup>
                     <strong>Econúcleo Vila Mangue</strong><br/>
                     <FaRegClock />  Horário: 8h a 17h <br/>
                   <a href="https://maps.app.goo.gl/uEqbVkA4hjSSbcKWA" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.115977668603954, -34.91550839691972]}>
                    <Popup>
                     <strong>Centro de Reciclagem do Recife</strong><br/>
                     <FaRegClock />  Horário: 8h a 16h <br/>
                   <a href="https://maps.app.goo.gl/qAZnTFb5ogFBoKZ79" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.097753455463128, -34.91955675685612]}>
                    <Popup>
                     <strong>Cooperativa de Catadores Profissionais do Recife</strong><br/>
                     <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/2QTxBkpjqpsEdgME7" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.03100171513698, -34.94247237517158]}>
                    <Popup>
                     <strong>REEECicle - Inteligência em Reciclagem</strong><br/>
                     <FaRegClock />  Horário: 8h a 17:30h <br/>
                   <a href="https://maps.app.goo.gl/WbLaw7Z43AKiiyiX6" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.10865069739007, -34.953491374289136]}>
                    <Popup>
                     <strong>Ecoestação Cohab</strong><br/>
                     <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/L8Ectba4irEZaFR6A" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.113301720086668, -34.953626498337634]}>
                    <Popup>
                     <strong>Ecoestação Ibura</strong><br/>
                     <FaRegClock />  Horário: 7h a 17h <br/>
                   <a href="https://maps.app.goo.gl/qR4XsqnEZW82WDio7" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.02036858838945, -34.87449068728338]}>
                    <Popup>
                     <strong>Ecoestação do Arruda</strong><br/>
                     <FaRegClock />  Horário: 8h a 18h <br/>
                   <a href="https://maps.app.goo.gl/N8CBMwZq15JeR27N6" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                  <Marker position={[-8.07359718996039, -34.89748189373431]}>
                    <Popup>
                     <strong>E.B.A Gestão Ambiental Nordeste</strong><br/>
                     <FaRegClock />  Horário: 8h a 17h <br/>
                   <a href="https://maps.app.goo.gl/naWnpKz786HdkYqN8" target="blank">Rota</a> 
                   <NavLink to="/materiais" onClick={handleNavLinkClick}>Materiais</NavLink>
                    </Popup>
                  </Marker>
                </Marker>          
                

              </MapContainer>
            </div>
            </section>
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
              <img src={Compose} alt="parceiro componse" className="empresa" />
              <img src={Sci} alt="parceiro sci" className="empresa" />
              <img src={Green} alt="parceiro green" className="empresa" />
              <img src={Duck} alt="parceiro duck" className="empresa" />
              <img src={Star} alt="parceiro star" className="empresa" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
