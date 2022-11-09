import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import HomeScreen from './components/homeScreen'
// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import {  } from 'react-router'
import PrivateRouter from './components/PrivateRouter'

import FormLogin from './components/login/formLogin'
import StudentScreen from './components/StudentScreen'


function App() {
const [classroom, setClassroom] = useState()
const URL = "https://english-classroom.onrender.com/api/v1/"
useEffect(() => {
axios.get("https://english-classroom.onrender.com/api/v1/users/63cd6011-7e76-4d6d-b25b-1d6e4182ec2f")
.then((res) => setClassroom(res.data))
.catch((err) => console.log(err))


  
}, [])

console.log(classroom)
  return (
   <div>
    < Routes>
      <Route path='/' element={< HomeScreen />}/>
      <Route path='login' element={< FormLogin />}/>
      <Route element={<PrivateRouter />} >
      <Route path='/students' element={<StudentScreen />}/>

      </Route>
    
    </Routes>
 
   </div>
  )
}

export default App
