import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



export default function cadSucess() {
   
    Toastify({
      text: "Cadastro realizado com sucesso!",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #4BE847, #5DD1A1)",
      }
    }).showToast();

  }

 
  
