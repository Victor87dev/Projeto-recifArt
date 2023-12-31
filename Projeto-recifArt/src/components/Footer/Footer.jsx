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
              Colaboramos com Empresas e artesãos ambiciosos. Vamos nos
              conectar.
            </p>
            <ul>

              <li>
                <a href=""><FaInstagram className="instagram" /></a>
                <span>Instagram</span>
              </li>
              <li>
                <a href=""><FaTwitter className="twitter" /></a>
                <span>twitter</span>
              </li>
              <li>
                <a href=""><FaFacebook className="facebook" /></a>
                <span>facebook</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_contatos">
          <h3>Recifart</h3>
        </div>
        <div className="footer_copyright">
          © 2023 Direitos reservados para o RecifArt.
        </div>
      </footer>
    </>
  );
};

export default Footer;
