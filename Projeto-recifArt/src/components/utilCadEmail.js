import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"



export default function cadEmailSucess() {
   
    Toastify({
      text: "Email já está em uso. Tente outro.",
      className: "danger",
      style: {
        background: "linear-gradient(to right, #E84747, #D15D5D)",
      }
    }).showToast();

  }

 
  
