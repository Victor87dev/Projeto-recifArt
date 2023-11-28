import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
       <div className="nomeartesao">
            <h3>{props.nome}</h3>
        </div>
        <div className="whatsapp">
           <a href={props.whatsapp}> <img src="." alt="" /></a>
        </div>  
     
    </>
  );
};

export default Portfolio;