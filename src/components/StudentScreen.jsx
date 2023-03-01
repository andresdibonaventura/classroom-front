import axios from 'axios'
import React from 'react'
import Task from './Task'
import {  useState, useEffect } from "react"
import getConfig from '../utils/getConfig'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import ReturnButton from './ReturnButton'

const StudentScreen = () => {
  const {id} = useParams()
  const navigate = useNavigate()

    const [tasks, setTasks] = useState([])

    useEffect(() => {
     const URL = "https://classroom-ef3j.onrender.com/api/v1/task/me"
    axios.get(URL, getConfig())
    .then(res => setTasks(res.data))
    .catch(err => console.log(err))
    }, [])



    const submit2 = id => {
      navigate(`/students/task/${id}`)
    } 

    // const submit2 = navigate(`task/${tasks?.[id]}`)
    console.log(tasks);
    console.log(id)
  return (
    <div className='containerTask'>
      <ReturnButton />
      <div className='col9 tasks'>
      {
          tasks.map(task => (
            <div className='taskscard' key ={task.id}>
                {/* <h3>{task.title}</h3> */}
                <h3 className='titletasks' onClick={() => submit2(task.id)}>{task.title.toUpperCase()}</h3>
                    {/* <button onClick={submit2()} type='button' >reponse</button>  */}
            </div>
      
          ))
       
        }
   
      </div>
        <ul className=' links col3'>
         <h2 className='titleLinks'>Classroom Links 
          </h2> 
         <a rel="stylesheet" href="https://www.notion.so/login" >
          Notion
         </a> <br />
         <a rel="stylesheet" href="https://zoom.us/">Zoom class</a> <br />
         <a rel="stylesheet" href="https://discord.gg/feKCQfaz">Discord</a> 
          
        </ul>
    </div>
  )
}

export default StudentScreen