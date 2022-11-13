import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import HomeScreen from './components/homeScreen'
// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import {  } from 'react-router'
import PrivateRouter from './components/PrivateRouter'
import getConfig  from './utils/getConfig'
import FormLogin from './components/login/Form'
import StudentScreen from './components/StudentScreen'
import LoginTeacher from './components/login/loginTeacher'
import TeacherScreen from './components/TeacherScreen'
import Register from './components/login/Register'
import LoginScreen from './components/login/LoginScreen'


function App() {
const [classroom, setClassroom] = useState()
const URL = "https://english-classroom.onrender.com/api/v1/"

  


console.log(classroom)
  return (
   <div>
    < Routes>
      <Route path='/' element={< HomeScreen />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='login' element={<LoginScreen />}/>
      <Route path='login-teacher' element={<LoginTeacher />}/>
      {/* <Route element={<PrivateRouter />} > */}
      <Route path='/students' element={<StudentScreen />}/>
      <Route path='/teacher' element={<TeacherScreen />}/>
{/* 
      </Route> */}
    
    </Routes>
 
   </div>
  )
    }

export default App
