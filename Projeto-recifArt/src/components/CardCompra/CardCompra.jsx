import React from "react";
import "./CardCompra.css";

const CardCompra = (props) => {
  return (
    <>
      <img src={props.img} alt="produto" className="img-urso" />
      <div className="box-divisao">
        <div className="box-informacoes">
          <h2 className="titulo-compra">{props.titulo}</h2>
          <ol className="lista-compra">
            <li>
              <span className="ponto-preto">●</span>
              <span className="azul">Material:</span> {props.material}
            </li>
            <li>
              <span className="ponto-preto">●</span>
              <span className="azul">Tamanho:</span> {props.tamanho}
            </li>
            <li className="cores">
              <span className="ponto-preto">●</span>
              <span className="azul">Cores:</span> {props.cores}
            </li>
          </ol>
          <img src={props.perfil} alt="" className="img-perfil" />
          <p className="p-nome">{props.nome}</p>
        </div>
        <div className="box-informacoes-compra">
          <input
            type="number"
            placeholder="Quantidade"
            className="input-compra"
          />
          <p className="p-preco">{props.preco}</p>
          <button type="button">Pagamento</button>
        </div>
      </div>
    </>
  );
};
export default CardCompra;
