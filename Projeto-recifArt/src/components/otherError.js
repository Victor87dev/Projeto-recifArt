import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



export default function otherError() {
   
    Toastify({
      text: "Erro ao processar o cadastro. Por favor, tente novamente!",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #E84747, #D15D5D)",
      }
    }).showToast();

  }

 
  
