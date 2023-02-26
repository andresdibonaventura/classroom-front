import React from 'react'
import { Navigate, useNavigate } from 'react-router'

const ReturnButton = () => {
const navigate = useNavigate()
    const submit = () => {
        navigate('/')
    }
  return (
   <button className='return-button' onClick={() => submit()}> {'<'} </button>
  )
}

export default ReturnButton