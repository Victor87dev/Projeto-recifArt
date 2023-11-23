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
    
         <FaLinkedin className="icons" />
        <FaGithub  className="icons"/>
        <FaInstagram className="icons"/>
                                   {/* LEMBRAR DE COLOCAR OS LINKS */}
      </div>
     
    </>
  );
};

export default Integrantes;
