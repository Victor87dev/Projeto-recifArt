import React from "react";
import { Derby } from "../image"
import { FaRegClock } from "react-icons/fa";
import "./CardColeta.css"

const CardColeta = (props) => {
  return (
    <>
      <div className="box-individual">
        <span className="animacao"></span>
        <span className="animacao"></span>
        <span className="animacao"></span>
        <span className="animacao"></span>
        <img src={Derby} alt="" />
        <div className="coleta-titulo">
          <span></span>
          <h2>{props.bairro}</h2>
        </div>
        <p>Rua hercílio celso, 214</p>
        <p>Recife-PE</p>
        <div className="box-horarios">
          <FaRegClock />
          <p className="horarios">08-18H de seg á dom</p>
        </div>
      </div>
    </>
  );
};

export default CardColeta;