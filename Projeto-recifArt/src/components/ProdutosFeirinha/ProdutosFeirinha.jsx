import React from "react";
import "./ProdutosFeirinha.css";

const ProdutosFeirinha = (props) => {
  return (
    <>
      <div className="box-produtos">
        <img src={props.img} alt="Produto" />
        <div className="nome-preco">
          <li>{props.produto}</li>
          <li>{props.preco}</li>
        </div>

        <div className="perfil-nome">
          <img src={props.perfil} alt="Perfil" />
          <p>{props.nome}</p>
        </div>

        <a href="./compra"><button type="button">Comprar</button></a>
      </div>
    </>
  );
};

export default ProdutosFeirinha;
