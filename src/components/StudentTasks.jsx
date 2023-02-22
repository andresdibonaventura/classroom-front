import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const StudentTasks = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const {id} = useParams()
  const nav = () => {
    navigate(`/califications/${tasks.id}`)
  }
useEffect(() => {
 axios.get(`https://classroom-ef3j.onrender.com/api/v1/notas/${id}`)
 .then(res => setTasks(res.data))
 .catch(err => console.log(err))

 
  
}, )


  return (
   <div>
{
  tasks?.map(task => (
   <li  key={task.id}
   src={task.id}
   >
      <h2 onClick={() => nav()}>{task.title} {task.id}</h2>
   </li>
  ))
}


   </div>
  )
}

export default StudentTasks