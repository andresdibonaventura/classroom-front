import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import StudentScreen from "../StudentScreen";
import TeacherScreen from "../TeacherScreen";
import Form from "./Form";
import FormTeacher from "./FormTeacher";
import './style/loginScreen.css'


const LoginTeacher = () => {

  const [token, setToken] = useState('')

  const changedToken = localStorage.getItem('token')

  useEffect(() => {

    setToken(changedToken)
  }, [changedToken])

  return (
    <div className="login">
      {
        token ?
          <TeacherScreen />
        :
          <FormTeacher />
      }
    </div>
  );
};

export default LoginTeacher;
