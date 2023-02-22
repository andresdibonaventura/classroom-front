import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import StudentScreen from "../StudentScreen";
import Form from "./Form";
import './style/loginScreen.css'


const LoginScreen = () => {

  const [token, setToken] = useState('')
  const navigate = useNavigate()
  const changedToken = localStorage.getItem('token')

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div>
      {
        token ?
        navigate('/students')
       
        :
          <Form />
      }
    </div>
  );
};

export default LoginScreen;
