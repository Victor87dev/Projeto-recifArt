import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardNoticia from "../../components/CardNoticia/CardNoticia";
import Footer from "../../components/Footer/Footer";
import "./Blog.css"

import{
   Noticia01,
   Noticia02,
   Noticia03,
   Noticia04,
   Noticia05,
   Noticia06,
} from "../../components/image";
const Blog = () => {
   const cardsNoticias = [
      {
         img: Noticia01 ,
         link: "https://www.google.com.br",
         data: "5 de Outubro de 2023",
         titulo: "Histórias de Artesãos Locais",
         descricao: "Conheça os talentos por trás das peças exclusivas, mergulhando nas inspiradoras narrativas dos artesãos locais que moldam a cultura de Recife.",
      },
      {
         img: Noticia02 ,
         link: "https://www.google.com.br",
         data: "23 janeiro, 2022",
         titulo: "Artesanato Sustentável",
         descricao: "Descubra a magia do artesanato que transforma materiais reciclados em verdadeiras obras de arte, impulsionando a sustentabilidade em cada criação.",
      },
      {
         img: Noticia03 ,
         link: "https://www.google.com.br",
         data: "18 feveveiro, 2023",
         titulo: "Dicas de Reciclagem Criativa",
         descricao: "Desperte sua criatividade com ideias simples e práticas para transformar itens cotidianos em projetos DIY incríveis, contribuindo para um estilo de vida mais sustentável.",
      },
      {
         img: Noticia04 ,
         link: "https://www.google.com.br",
         data: "19 março, 2023",
         titulo: "Empresas Sustentáveis em Recife",
         descricao: "Explore negócios locais comprometidos com práticas ecológicas, descobrindo como apoiar essas iniciativas para fortalecer a comunidade.",
      },
      {
         img: Noticia05 ,
         link: "https://www.google.com.br",
         data: "7 agosto, 2023",
         titulo: "Pontos de Coleta em Destaque",
         descricao: "Mapeie os pontos de coleta essenciais na região, incentivando a participação ativa na reciclagem para um Recife mais limpo e consciente.",
      },
      {
         img: Noticia06 ,
         link: "https://www.google.com.br",
         data: "14 setembro, 2023",
         titulo: "Eventos Culturais e Artesanais",
         descricao: "Fique por dentro dos eventos que celebram a riqueza cultural e artística de Recife, proporcionando experiências únicas para a comunidade.",
      },

   ]
   
   return (
      <>
         <div id="container-blog">
            <header className="header-blog">
               <Navbar />

               <h1>Nosso Blog, Sua Jornada</h1>
               <p>Conectando, Inspirando e Educando para um Mundo Mais Sustentável e Criativo</p>

            </header>
            <main>
               <div className="barraDePesquisa reveal">
                  <input
                     type="text"
                     placeholder="Pesquisar..."
                    
                     className="inputPesquisa"
                  />
               </div>
               <div className="card-noticia reveal">
               {cardsNoticias.map((card) => (
                <CardNoticia
                  img={card.img}
                  link={card.link}
                  data={card.data}
                  titulo={card.titulo}
                  descricao={card.descricao}
                />
              ))}
              </div>
            </main>

            <Footer />

         </div>
      </>
   )

}
export default Blog;