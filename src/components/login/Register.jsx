import axios from 'axios'
import React from 'react'

const Register = () => {

  const submit = data => {
    const URL = "https://classroom-ef3j.onrender.com/api/v1/users"
    axios.post(URL, data)
    .then(res => res.data)
    .catch(err => console.log(err))
  }
  return (
    <div>Register</div>
  )
}

export default Register