import React from "react";
import "./CardCriatividade.css";

const CardCriatividade = (props) => {
  return (
    <>
      <div className="item-1">
        <img src={props.img} alt="" />
        <h2>{props.titulo}</h2>
        <p>{props.descricao}</p>
      </div>
    </>
  );
};

export default CardCriatividade;
