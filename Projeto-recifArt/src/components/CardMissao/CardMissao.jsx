import React from "react";
import "./CardMissao.css";

const CardMissao = (props) => {
  return (
    <>
      <div className="icone">
        <img src={props.img} alt="" />
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>
     
    </>
  );
};

export default CardMissao;
