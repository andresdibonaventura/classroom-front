import axios, { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const RegisterTeacher = () => {

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()
    const submit  = async data => {
      try {
        const res = await axios.post('https://classroom-ef3j.onrender.com/api/v1/users/teacher', data);
        console.log(res)
        
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
        <label htmlFor="firstName" className="login__label">firstName</label>
        <input 
          type="text"
          className="loginInput" 
          id="firstName"
          {...register('firstName')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="lastName" className="login__label">lastName</label>
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
          className="loginInput" 
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
        <label htmlFor="password" className="login__label">password</label>
        <input 
          type="password"
          className="loginInput" 
          id="password"
          {...register('password')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="country" className="login__label">country</label>
        <input 
          type="text" 
          className="login__input" 
          id="country"
          {...register('country')}
        />
      </li>
      <li className="login__item">
        <label htmlFor="verificationCode" className="login__label">Verification code</label>
        <input 
          type="text" 
          className="login__input" 
          id="verificationCode"
          {...register('verificationCode')}
        />
      </li>

     
    </ul>
    
    <button className='plan-button'>Confirmar</button>
  </form>
  )
}

export default RegisterTeacher