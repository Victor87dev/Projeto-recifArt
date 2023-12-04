import React from "react";
import "./ProdutosFeirinha.css";

const ProdutosFeirinha = (props) => {
  return (
    <>
      <div className="box-produtos">
        <img src={props.img} alt="Produto" />
        <div className="nome-preco-feirinha">
          <span>{props.produto}</span>
          <span>{props.preco}</span>
        </div>

        <div className="perfil-nome">
        <img src={props.perfil} alt="Perfil" />
        <a href="/perfil"> <p>{props.nome}</p>
          </a>
        </div>

        <a href="./compra"><button type="button">Comprar</button></a>
      </div>
    </>
  );
};

export default ProdutosFeirinha;
