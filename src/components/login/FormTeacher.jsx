import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormTeacher = () => {

  const [isErrorLogin, setIsErrorLogin] = useState(false)

  const {handleSubmit, reset, register} = useForm()

  const navigate = useNavigate()

  const submit = data => {
    const URL = 'https://classroom-ef3j.onrender.com/api/v1/auth/login-teacher'
    axios.post(URL, data)
      .then(({data})=> {
        console.log(data)
        localStorage.setItem('token', data.token)
        navigate('/teacher')
      })
      .catch(err => {
        localStorage.removeItem('token')
        setIsErrorLogin(true)
        setTimeout(() => {
          setIsErrorLogin(false)
        }, 5000)
        console.log(data)
      })
    reset({
      email: '',
      password: ''
    })
    
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <ul className="login__test">
        <li className="flex-login">
          <b className="login-b">Email: </b>andres@gmail.com
        </li>
        <li className="flex-login">
          <b className="login-b">Password:    </b>root1
        </li>
      </ul>
      <h2 className="login__title">Enter your information</h2>
      <ul className="login__list">
        <li className="login__item">
          <label htmlFor="login-email" className="login__label">Email</label>
          <input 
            type="email"
            className="login__input inputText3" 
            id="login-email"
            {...register('email')}
          />
        </li>
        <li className="login__item">
          <label htmlFor="login-pass" className="login__label">Password</label>
          <input
            type="password" 
            className="login__input inputText2" 
            id="login-pass"
            {...register('password')}
          />
        </li>
      </ul>
      <div>
        {
          isErrorLogin && 'Invalid credentials, try again...'
        }
      </div>
      <button>Login</button>
    </form>
  )
}

export default FormTeacher