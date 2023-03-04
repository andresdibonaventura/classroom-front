import axios, { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import ReturnButton from './ReturnButton'
import { useRef } from 'react'


const RegisterFirstVEN = () => {

  const {handleSubmit: HandleSubmitForm, reset, register} = useForm()
//   const locale = new Intl.Locale("fr-Latn", { region: "FR" });
// console.log(locale.region); 
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"

const price = () => {
  if (locale.region === "US"){
    return 100
  } else {
    return 70
  }
}
 const nav = () => {

}
  const navigate = useNavigate()
    const submit  = async data => {
      try {
        const res = await axios.post('https://classroom-ef3j.onrender.com/api/v1/users', data);
        console.log(res)
        nav()
      } catch (error) {
      if(error instanceof AxiosError){
        console.log(error.message)
        console.log(error.response.data)
        console.log({data})
      } else{
        console.log(error)
      }
        
      }
      
        
      }

      const redirectLink = useRef(null); 

      function  onSubmit(data, e) {
    

        window.location.href = redirectLink.current.href;
      }

      function handleButtonClick() {
        HandleSubmitForm(onSubmit)();
      }
  return (
    
    <form onSubmit={HandleSubmitForm(submit, onsubmit)} className="login__form ">
    <ReturnButton />
    <h2 className="login__title">Enter your information</h2>
    <ul className="login__list">
      <li className="login__item">
        <label htmlFor="firstName" className="login__label">Name</label>
        <input 
          type="text"
          className="login__input" 
          id="firstName"
          {...register('firstName')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="lastName" className="login__label">Last Name</label>
        <input 
          type="text" 
          className="login__input" 
          id="lastName"
          {...register('lastName')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="gender" className="login__label">Gender</label>
        <input 
          type="text"
          className="login__input" 
          id="gender"
          {...register('gender')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="email" className="login__label">Email</label>
        <input 
          type="email" 
          className="login__input" 
          id="email"
          {...register('email')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="password" className="login__label">Password</label>
        <input 
          type="password"
          className="login__input" 
          id="password"
          {...register('password')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="country" className="login__label">Country</label>
        <input 
          type="text" 
          className="login__input" 
          id="country"
          {...register('country')}
        />
      </li>

     
    </ul>
    
    <a ref={redirectLink} href="https://buy.stripe.com/3cs9Ed8KfdQc8qk3cf">Redireccionar</a>
      <button onClick={handleButtonClick} className='plan-button' type="submit">Enviar formulario</button>
   
  
  </form>
  )
}

export default RegisterFirstVEN