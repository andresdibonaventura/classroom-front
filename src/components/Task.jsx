import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import { useState, useEffect } from "react"

const Task = () => {
    const [task, setTask] = useState()
    useEffect(() => {
       
    axios.get("https://english-classroom.onrender.com/api/v1/task/me")
    .then(res => setTask(res.data))
    .catch(err => console.log(err))  
    }, [])
    console.log(task)
    const navigate = useNavigate()
    
    // const clickTask = () => ("")
  return (
    <div></div>
  )
}

export default Task