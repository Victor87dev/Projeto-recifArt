import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



export default function passwordIncorrect() {
   
    Toastify({
      text: "Email ou senha incorretas",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #E84747, #D15D5D)",
      }
    }).showToast();

  }

 
  
