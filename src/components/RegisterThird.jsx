import axios, { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const RegisterThird = () => {

  const {handleSubmit, reset, register} = useForm()
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

  const navigate = useNavigate()
    const submit  = async data => {
      try {
        const res = await axios.post('https://classroom-ef3j.onrender.com/api/v1/users', data);
        console.log(res)
        navigate('/login')
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
  return (
    
    <form onSubmit={handleSubmit(submit)} className="login__form ">
    
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
    
    <button className='plan-button'> <a rel="stylesheet" href="https://buy.stripe.com/28og2B9Oj4fC7mgfZ0">Pagar</a>
    </button>
  </form>
  )
}

export default RegisterThird