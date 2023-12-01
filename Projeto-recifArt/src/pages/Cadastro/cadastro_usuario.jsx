import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import logo from "../../assets/img/LOGO.svg";
import Axios from 'axios';




function Cadastro() {

  const handleclickRegister=(values) => {

    Axios.post('http://localhost:3002/register/usuario', {
          name: values.name,
          email: values.email,
          cpf: values.cpf,
          password: values.password,



    }).then((response) => {
       
    console.log(response)

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
     <div className='img'>
    
     <img src={logo}></img>
     </div>
     
    


      <Formik initialValues={{}}
        onSubmit={handleclickRegister}
        validationSchema={validationRegister}
        
        >
        <Form className='login form'>
        <div className='login-form-group'>
   <h1>Prazer em conhecê-lo!</h1>
          
  
  <label className='name'>
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
  
</div>

<div className='login-form-group'>
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
  <label className='cpf'>
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
  <label className='password'>
  <p>Senha</p>
  <Field
  
    name='password'
    className='form-field'
    placeholder='Senha'
  />
  <ErrorMessage
    component='span'
    name='password'
    className='form error'
  />
  </label>

</div>

<div className='login-form-group'>
 <label className='ConfirmPassword'>
 <p>Confirme sua senha</p>
 <Field
    name='ConfirmPassword'
    className='form-field'
    placeholder='Confirme sua senha'
  />
  <ErrorMessage
    component='span'
    name='ConfirmPassword'
    className='form error'
  />
</label>
</div>

<button className='button' type='submit' src='#'>
Cadastrar
</button>
 <a className='cadastrar'>Não tem uma conta?<span> Faça o login</span></a>
        </Form>
 </Formik>



    </div>
  
  );    
}

export default Cadastro;
