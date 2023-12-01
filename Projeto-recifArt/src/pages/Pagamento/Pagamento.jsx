import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Pagamento.css";
import { Cartoes, Cartoes2 } from "../../components/image";

const Pagamento = () => {
     
  return (
    <>
      <div id="container-pagamento">
        <header className="header-pagamento">
          <Navbar />
          <h1>Pagamento</h1>
        </header>
        <div className="container-form-pagamento">
          <form action="">
            <div className="row">
              <div className="col">
                <h3 className="title">Informações necessárias</h3>
                <div className="informacoes-pagamento">
                  <div className="inputBox">
                    <span>Nome Completo :</span>
                    <input
                      className="input-color"
                      type="text"
                      placeholder="informe seu nome"
                    />
                  </div>
                  <div className="inputBox">
                    <span>Email :</span>
                    <input type="email" placeholder="example@example.com" />
                    
                  </div>
                  <div className="inputBox">
                    <span>Endereço :</span>
                    <input type="text" placeholder="informe seu endereço" />
                  </div>
                  <div className="inputBox">
                    <span>Cidade :</span>
                    <input type="text" placeholder="informe sua cidade" />
                  </div>

                  <div className="flex">
                    <div className="inputBox">
                      <span>País :</span>
                      <input type="text" placeholder="Brasil" />
                    </div>
                    <div className="inputBox">
                      <span>CEP :</span>
                      <input type="text" placeholder="informe o CEP" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <h3 className="title">Forma de Pagamento</h3>

                <div className="inputBox">
                  <span>Cartões aceitos :</span>
                  <img src={Cartoes2} alt="" />
                </div>
                <div className="inputBox">
                  <span>Titular do Cartão :</span>
                  <input type="text" placeholder="informe" />
                </div>
                <div className="inputBox">
                  <span>Número do Cartão :</span>
                  <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                  <span>Mês Vencimento :</span>
                  <input type="text" placeholder="janeiro" />
                </div>

                <div className="flex">
                  <div className="inputBox">
                    <span className="ano-span">Ano vencimento :</span>
                    <input type="number" placeholder="2023" />
                  </div>
                  <div className="inputBox">
                    <span className="cvv">CVV :</span>
                    <input type="text" placeholder="1234" />
                  </div>
                </div>
              </div>
            </div>

            <a
            onClick={()=>{
                alert("Obrigado, volte sempre!")  
            }}
              className="btn-finalizar"
              href="/home"
            >
              Finalizar compra
            </a>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Pagamento;
