import React, { useState } from "react";
import "./CardCompra.css";
import ImageProduct1Thumbnail from './../../assets/img/detalhe-compra/produto-tapete1.jpg';
import ImageProduct2Thumbnail from './../../assets/img/detalhe-compra/produto-tapete2.jpg';
import ImageProduct3Thumbnail from './../../assets/img/detalhe-compra/produto-tapete3.png';
import ImageProduct4Thumbnail from './../../assets/img/detalhe-compra/produto-tapete4.jpg';
import IconMinus from './../../assets/img/detalhe-compra/icon-minus.svg';
import IconPlus from './../../assets/img/detalhe-compra/icon-plus.svg';
import IconNext from './../../assets/img/detalhe-compra/icon-next.svg';
import IconPrevious from './../../assets/img/detalhe-compra/icon-previous.svg';
import { FaDollarSign } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

import { NavLink } from "react-router-dom";

const CardCompra = (props) => {

  const produtos = [ImageProduct1Thumbnail, ImageProduct2Thumbnail, ImageProduct3Thumbnail, ImageProduct4Thumbnail];

  const [quantidade, setQuantidade] = useState(0);
  const [imagemAtual, setImagemAtual] = useState(0);
  const [imagemThumb, setImagemThumb] = useState(produtos[0])

  const incrementar1 = () => {
    setQuantidade(quantidade + 1);
  }

  const decrementar1 = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  const proximaImage = () => {
    if (imagemAtual == 3) {
      setImagemAtual(0);
      setImagemThumb(produtos[0]);
    } else {
      setImagemThumb(produtos[imagemAtual + 1]);
      setImagemAtual(imagemAtual + 1);
    }
  }

  const anteriorImage = () => {
    if (imagemAtual == 0) {
      setImagemAtual(3);
      setImagemThumb(produtos[3]);
    } else {
      setImagemThumb(produtos[imagemAtual - 1]);
      setImagemAtual(imagemAtual - 1);
    }
  }

  const [imagemSelecionada, setImagemSelecionada] = useState(ImageProduct1Thumbnail);

  const selecionarImagem = (novaImagem) => {
    setImagemSelecionada(novaImagem);
    setImagemThumb(novaImagem);
  };



  return (
    <>
      <main className="card-compra">
    <NavLink className="btn-voltar" to="/feirinha">
      <FaArrowLeft className="icons voltar" />
      Voltar
    </NavLink>
        <section className="thumbnails">
          <img src={imagemThumb} alt="produto1" className="main-thumbnail invisible-mob" />
          <div className="mobile-thumb hidden">
            <img src={imagemThumb} alt="produto1" className="thumb-mob" />
            <button id="next" onClick={proximaImage}>
              <img src={IconNext} alt="proximo" />
            </button>
            <button id="previous" onClick={anteriorImage}>
              <img src={IconPrevious} alt="anterior" />
            </button>
          </div>
          <div>
            <div className="preview">
              {[ImageProduct1Thumbnail, ImageProduct2Thumbnail, ImageProduct3Thumbnail, ImageProduct4Thumbnail].map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`produto${index + 1}`}
                  className={imagem === imagemSelecionada ? 'selected' : ''}
                  onClick={() => selecionarImagem(imagem)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="content">
          <p className="company">Fabiana Marques</p>
          <h1 className="title">Tapete de Retalho Artesanal</h1>
          <p className="info">
            Tapete de retalho feito à mão, uma joia cheia de charme e exclusividade. Cada ponto revela cuidado dedicado, transformando retalhos de tecido em uma expressão autêntica para decorar seu lar com estilo e sustentabilidade.
          </p>
          <div className="price">
            <div className="new-price">
              <p className="now">R$ 149,00</p>
              <span>50%</span>
            </div>
            <p className="old-price">
              R$ 299,00
            </p>
          </div>
          <div className="buttons">
            <div className="amount-btn">
              <button id="minus" onClick={decrementar1}>
                <img src={IconMinus} alt="menos" />
              </button>
              <p className="amount">{quantidade}</p>
              <button id="plus" onClick={incrementar1}>
                <img src={IconPlus} alt="mais" />
              </button>
            </div>

            <NavLink className="add_btn" to="/pagamento">
              <FaDollarSign className="icons pagamento" />
              Pagar
            </NavLink>
          </div>
        </section>
      </main>


    </>
  );
};
export default CardCompra;
