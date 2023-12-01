
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import logo from "../../assets/img/LOGO.svg"
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"


function login() {


    
  const navigate = useNavigate();
    


  const handleclicklogin = async (values) => {
    try {
      const response = await Axios.post('http://localhost:3002/login/empresa', {
        email: values.email,
        password: values.password,
      })

      const token = response.data.token;

     
      localStorage.setItem('token', token);
    
      navigate('/home');

  
    } catch (error) {
      if (error.isAxiosError && error.response.status === 401) {
        if (error.response.data.msg === 'Senha incorreta') {
          alert('Senha incorreta. Por favor, verifique sua senha.');
         
        } else if (error.response.data.msg === 'O email está incorreto') {
          alert('O email está incorreto. Por favor, verifique seu email.');
         
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
     
    


      <Formik initialValues={{}}
        onSubmit={handleclicklogin}
        validationSchema={validationLogin}
        
        >
        <Form className='login form'>
        <div className='login-form-group'>
   <h1>Bem Vindo de volta!</h1>
          
  
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
  
</div>

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
</div>
<a className='recuperarSenha'>Recuperar senha</a>


</div>

<button className='button' type='submit' src='#'>
  Entrar
</button>
 <a className='cadastrar'>Não tem uma conta?<span> cadastra-se</span></a>
        </Form>
 </Formik>



    </div>
  
  );
}

export default login;
