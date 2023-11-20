import React from "react";
import BoaViagem from "../img/boaViagem.png"
import '../css/Home.css'
import { FaRegClock } from "react-icons/fa";

const CardColeta = (props) => {
  return (
    <>
      <div class="box-individual">
        <span class="animacao"></span>
        <span class="animacao"></span>
        <span class="animacao"></span>
        <span class="animacao"></span>
        <img src={BoaViagem} alt="" />
        <div class="coleta-titulo">
          <span></span>
          <h2>{props.bairro}</h2>
        </div>
        <p>Rua hercílio celso, 214</p>
        <p>Recife-PE</p>
        <div class="box-horarios">
          <FaRegClock />
          <p class="horarios">08-18H de seg á dom</p>
        </div>
      </div>
    </>
  );
};

export default CardColeta;
