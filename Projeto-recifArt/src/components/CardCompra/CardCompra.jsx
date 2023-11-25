import React from "react";
import "./CardCompra.css";

const CardCompra = (props) => {
  return (
    <>
      <img src={props.img} alt="produto" className="img-urso"/>
      <div className="box-informacoes">
        <h2>{props.titulo}</h2>
        <ol>
          <li><span>●</span><span className="azul">Material:</span> {props.material}</li>
          <li><span>●</span><span className="azul">Tamanho:</span> {props.tamanho}</li>
          <li><span>●</span><span className="azul">Cores Disponíveis:</span> {props.cores}</li>
        </ol>
        <input type="number" placeholder="Selecione a quantidade" />
        <p className="p-preco">{props.preco}</p>
        <button type="button">Comprar</button>
        <img src={props.perfil} alt="" className="img-perfil"/>
        <p className="p-nome">{props.nome}</p>
      </div>
    </>
  );
};
export default CardCompra;
