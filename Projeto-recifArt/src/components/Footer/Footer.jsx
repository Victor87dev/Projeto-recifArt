import React from "react";
import { Logo } from "../image";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_media">
          <div className="footer_media_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer_media_email">
            <div className="footer_media_email_label">
              <span>Contatos</span>
              <span className="ponto_verde"></span>
            </div>

            <div className="contatos">
              <ul>
                <li>(81) 9-9999-9999</li>
                <li>Rua da pera, 214 -pina</li>
                <li>Pernambuco-PE</li>
              </ul>
            </div>
          </div>
          <div className="footer_media_socialmedia">
            <p>
              Colaboramos com Empresas e artesãos ambiciosos. vamos nos
              conectar.
            </p>
            <ul>
              <li>
                <span className="ponto_verde"></span>
                <span>Social</span>
              </li>

              <li>
                <FaInstagram style={{ color: "purple" }} />
                <span>Instagram</span>
              </li>
              <li>
                <FaTwitter style={{ color: "aquamarine" }} />
                <span>twitter</span>
              </li>
              <li>
                <FaFacebook style={{ color: "blue" }} />
                <span>facebook</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_contatos">
          <h3>Recifart</h3>
          <button>Entre em contato</button>
        </div>
        <div className="footer_copyright">
          © 2023 Direitos reservados para o RecifArt.
        </div>
      </footer>
    </>
  );
};

export default Footer;
