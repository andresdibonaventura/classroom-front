import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import HomeScreen from './components/HomeScreen'
// import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import {  } from 'react-router'

import StudentScreen from './components/StudentScreen'
import LoginTeacher from './components/login/LoginTeacher'
import TeacherScreen from './components/TeacherScreen'

import LoginScreen from './components/login/LoginScreen'
import TaskCard from './components/TaskCard'
import TeacherTask from './components/TeacherTask'
import Header from './components/header/Header'
import RegisterFirst from './components/RegisterFirst'
import RegisterSecond from './components/RegisterSecond'
import RegisterThird from './components/RegisterThird'
import StudentTasks from './components/StudentTasks'
import Califications from './components/Califications'
import RegisterTeacher from './components/RegisterTeacher'
import FooterScreen from './components/Footer/FooterScreen'
import GetUsers from './components/GetUsers'
import Niveles from './components/Niveles'
import QuienesSomos from './components/QuienesSomos'
import RegisterFirstVEN from './components/VENRegister1'
import RegisterSecondVEN from './components/VENRegister2'
import RegisterThirdVEN from './components/VENRegister3'



function App() {
const [classroom, setClassroom] = useState()
const URL = "https://classroom-ef3j.onrender.com/api/v1/"

console.log(classroom)
  return (
   <div className='App'>
    <Header />
    <main className='main'>
    < Routes>
      <Route path='/' element={< HomeScreen />}/>
      <Route path='/register-plan-1' element={<RegisterFirst />}/>
      <Route path='/register-plan-1-V' element={<RegisterFirstVEN />} />
      <Route path='/register-plan-2' element={<RegisterSecond />}/>
      <Route path='/register-plan-2-V' element={<RegisterSecondVEN />} />
      <Route path='/register-plan-3' element={<RegisterThird />}/>
      <Route path='/register-plan-3-V' element={<RegisterThirdVEN />} />
      <Route path='login' element={<LoginScreen />}/>
      <Route path='login-teacher/$2b$10$Yz37nZKrjAjJz/uendIsl.FqqrnfE3zQiKZWs9kteUkhDR41tuSzO' element={<LoginTeacher />}/>
      {/* <Route element={<PrivateRouter />} > */}
      <Route path='/tasks' element={<TeacherTask/>}/>
      <Route path='/students' element={<StudentScreen />}/>
      <Route path='/teacher' element={<TeacherScreen />}/>
      <Route path='/teacher-register' element={<RegisterTeacher />} />
      <Route path='students/task/:id' element={<TaskCard />}/>
      <Route path='/studentsTask/:id' element={<StudentTasks/>}/>
      <Route path='/califications/:id' element={<Califications/>}/>
      <Route path='/levels' element={<Niveles />}/>
      <Route path='/nosotros' element={<QuienesSomos />}/>
      <Route path='/getAllUsersById$2b$10$Yz37nZKrjAjJz/uendIsl.FqqrnfE3zQiKZWs9kteUkhDR41tuSzO' element={<GetUsers />}/>
    
{/* R
      </Route> */}
    
    </Routes>
 
    </main>
  
    <FooterScreen />
   </div>
  )
    }

export default App
