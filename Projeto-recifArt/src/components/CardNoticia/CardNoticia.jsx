import React from "react";
import "./CardNoticia.css";

const CardNoticia = (props) => {
  return (
    <>
      <div className="Noticia">
        <img src={props.img} alt=""/>
        <div className="texto-noticia">
        <a href={props.link}>
        <h3>{props.titulo}</h3>
        <div id="linha"></div>
        </a>
        <p className="data">{props.data}</p>
        <p>{props.descricao}</p>
        </div>
      </div>
     
    </>
  );
};

export default CardNoticia;