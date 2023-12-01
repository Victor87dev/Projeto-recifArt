import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import logo from "../../assets/img/LOGO.svg";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Cadastro() {
  const navigate = useNavigate();
  const handleclickRegister=(values) => {

    Axios.post('http://localhost:3002/register/artesao', {
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          password: values.password,



    }).then((response) => {
      console.log(response.data.msg); 
    
     
        if (response.data.msg === 'Cadastrado com sucesso') {
        alert('Cadastro realizado com sucesso!');
        navigate('/login_artesao');
      } else if (response.data.msg === 'Email já está em uso') {
        alert('Email já está em uso. Tente outro.');
      } else {
        alert('Erro ao processar o cadastro. Por favor, tente novamente.');
      }
    })
    .catch((error) => {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição. Por favor, tente novamente.');
    })
  };


  const validationRegister = yup.object().shape({
    name: yup
    .string()
    .required('Este campo é obrigatorio')
    .min(9,'Nome deve ter pelo menos 9 caracteres'),
    email: yup
    .string()
    .email('Não é um email')
    .required('Este campo é obrigatorio'),
    cpf: yup
    .string()
    .required('Este campo é obrigatorio') 
    .matches(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
    password: yup
    .string()
    .min(6, ' a senha deve ter no minimo 6 caracteres')
    .required('Este campo é obrigatorio'),
    ConfirmPassword: yup 
    .string()
    .oneOf([yup.ref('password'), null ], ' as senhas não se correspondem')
    .required('Este campo é obrigatorio')

      })


  return (
      
   

    <div className="container-cadastro" >
         
       <div className="ladoEsquerdo">

        <a href="/escolhacad"> <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM25 7L1 7V9L25 9V7Z" fill="black" />
                </svg> Voltar</button></a>

       <Formik initialValues={{}}
         onSubmit={handleclickRegister}
         validationSchema={validationRegister}
         
         >
        <Form  >
         

   <h1>Prazer em conhecê-lo!</h1>
          
  <div className="form-align">
    
  <label className='name-cad'>
  <p>Nome</p>
  <Field
    name='name'
    className='form-field'
    placeholder='Seu nome completo'
    />
  <ErrorMessage
    component='span'
    name='name'
    className='form-error'
    />
  </label>
  


<div className='login-form-group'>
  <label className='email-cad'>
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
  <label className='cpf-cad'>
  <p>CPF</p>
  <Field
   type="number"
   name='cpf'
   className='form-field'
   placeholder='Coloque seu CPF'
   />
  <ErrorMessage
    component='span'
    name='cpf'
    className='form-error'
    />
  </label>  
</div>

<div className='login-form-group'>
  <label className='password-cad'>
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

<div className='login-form-group'>
 <label className='ConfirmPassword-cad'>
 <p>Confirme sua senha</p>
 <Field
    type="password"
    name='ConfirmPassword'
    className='form-field'
    placeholder='Confirme sua senha'
    />
  <ErrorMessage
    component='span'
    name='ConfirmPassword'
    className='form-error'
    />
</label>
</div>
  </div>
<div className="parteinferiorCad">

<button className='button' type='submit' src='#'>
 Cadastrar
</button>
<p>já tem uma conta?<a href="login_artesao" className='login-area'> Faça o login</a></p>
</div>
        </Form>
 </Formik>

    </div>

<div className="ladoDireito">

<div className='img-cad'>

<img src={logo}></img>
</div>
</div>
    </div>



);    
}


export default Cadastro;
