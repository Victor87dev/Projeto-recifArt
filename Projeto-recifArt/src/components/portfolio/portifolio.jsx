import React from "react";
import "./portifolio.css"
import { whatsapp } from "../image";

const Portfolio = (props) => {
  return (
    <>
    <div className="artesao">
     <img src={props.img} alt="" />
     <h3>{props.nome}</h3>
     <a href={props.whatsapp} target="blank"><img src={whatsapp} alt="" /></a>
     </div>
     <div className="descricao">
      <p>{props.descricao}</p>
     </div>

     <div className="trabalhos">
      <h1>Meus Trabalhos</h1>
     </div>
    </>
  );
};

export default Portfolio;