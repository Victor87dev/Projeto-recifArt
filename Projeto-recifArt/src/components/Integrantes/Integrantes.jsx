import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Integrantes.css";


const Integrantes = (props) => {
  return (
    <>
      <div className="integrante">
        <img src={props.img} alt="" />
        <h3>{props.nome}</h3>
        <p>{props.area}</p>

        <a href={props.Likendin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="icons" /></a>
      <a href={props.github} target="_blank" rel="noopener noreferrer"><FaGithub className="icons" /></a>
      <a href={props.Instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="icons" /></a>

      </div>
     
    </>
  );
};

export default Integrantes;
