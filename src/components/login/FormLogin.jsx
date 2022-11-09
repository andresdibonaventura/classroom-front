import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../../store/slices/counter.slices";


const   FormLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [student, setStudent] = useState(false)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
   if (localStorage.getItem('user-info')){
    history.push('/add')
   }

  }, [])
  
 function validation() {
    let item = {email, password}
    console.log(item)
    axios.post("https://english-classroom.onrender.com/api/v1/auth/login", item)
    .then(({data}) => {dispatch(setUser(data))})
    .catch(err => console.log(err))
    navigate("/students")
   

    // result =  result.json()
    //  localStorage.setItem(JSON.stringify())
    // history.push("add")
  }
 

  return (
    <div>
      <input
        type="text"
        value={email}
        placeholder = "email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder= "password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={validation}>login</button>
    </div>
  );
};

export default FormLogin;
