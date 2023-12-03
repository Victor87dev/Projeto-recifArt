
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import logo from "../../assets/img/LOGO.svg"
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import passwordIncorrect from "../../components/util"


function login() {


  const navigate = useNavigate();
    


  const handleclicklogin = async (values) => {
    try {
      const response = await Axios.post('http://localhost:3002/login/usuario', {
        email: values.email,
        password: values.password,
      })

      const token = response.data.token;

     
      localStorage.setItem('token', token);
    
      navigate('/home');

  
    } catch (error) {
      if (error.isAxiosError && error.response.status === 401) {
        if (error.response.data.msg === 'Senha incorreta') {
          passwordIncorrect()
         
        } else if (error.response.data.msg === 'O email está incorreto') {
          passwordIncorrect()
        }
      } else {
       
        console.error(error);
      }
    }
  };

 
  const validationLogin = yup.object().shape({
    email: yup
    .string()
    .email('Não é um email')
    .required('Este campo é obrigatorio'),
    password: yup
    .string()
    .required('Este campo é obrigatorio')
      })


  return (
       
     <div className="container-login" >
     <div className='img-login'>
      
     <img src={logo}></img>
     </div>
     <div className='lado-esquerdo'>
               <a href="/escolhalog"> <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM25 7L1 7V9L25 9V7Z" fill="black" />
                </svg> Voltar</button></a>
    


      <Formik initialValues={{}}
        onSubmit={handleclicklogin}
        validationSchema={validationLogin}
        
        >
        <Form className='login form'>
        <div className='login-form-group'>
   <h1>Bem Vindo de volta!</h1>
   <div className='login-email'>
  <label className='email'>
  <p>E-mail</p>
  <Field
    name='email'
    className='form-field'
    placeholder='Coloque seu E-mail'
  />
  <ErrorMessage
    component='span'
    name='email'
    className='form-error'
  />
  </label>
  


<div className='login-form-group'>
  <label className='senha'>
  <p>Senha</p>
  <Field
    type="password"
    name='password'
    className='form-field'
    placeholder='Senha'
  />
  <ErrorMessage
    component='span'
    name='password'
    className='form-error'
  />
  </label>
  </div>
  </div>
</div>
<div className='flex-login'>


<div className='login-form-group3'>
<label>
              <Field
                type='checkbox'
                name='checked'
                value='Manter login'
              />
        <> Manter login</>
   </label>
<a className='recuperarSenha'>Recuperar senha</a>
</div>


</div>

<button className='button' type='submit' src='#'>
  Entrar
</button>
<p>Não tem uma conta?<a href="cadastro_usuario" className='cadastrar'> Cadastra-se</a></p>
        </Form>
 </Formik>
</div>


    </div>
  
  );
}

export default login;
