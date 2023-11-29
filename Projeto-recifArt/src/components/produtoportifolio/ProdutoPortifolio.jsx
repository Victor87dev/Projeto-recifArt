import React from "react";
import "./produto.css"

const ProdutoPortifolio = (props) => {
  return (
    <>
      <div className="caixa-produtos">
        <img src={props.img} alt="Produto" />
        <div className="nome-preco">
          <li>{props.produto}</li>
        </div>
        <button type="button">Comprar</button>
      </div>
    </>
  );
};

export default ProdutoPortifolio;