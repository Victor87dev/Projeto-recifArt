import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import logo from "../../assets/img/LOGO.svg";
import Axios from 'axios';
import "./Cadastro.css"
import { useNavigate } from 'react-router-dom';



function Cadastro() {
  const navigate = useNavigate();

  const handleclickRegister=(values) => {

    Axios.post('http://localhost:3002/register/usuario', {
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          password: values.password,



    }).then((response) => {
         console.log(response.data.msg); 
    
     
        if (response.data.msg === 'Cadastrado com sucesso') {
        alert('Cadastro realizado com sucesso!');
        navigate('/login_usuario');
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
    
    

    <div className="container" >
     

       <Formik initialValues={{}}
         onSubmit={handleclickRegister}
         validationSchema={validationRegister}
         
         >
        <Form className='ladoEsquerdo' >
     
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
 <a className='jatemconta'>já tem uma conta?<span> Faça o login</span></a>
</div>
        </Form>
 </Formik>


<div className="ladoDireito">

<div className='img-cad'>

<img src={logo}></img>
</div>
</div>
    </div>



);    
}


export default Cadastro;
