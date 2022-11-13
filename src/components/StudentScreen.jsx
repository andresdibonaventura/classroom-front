import axios from 'axios'
import React from 'react'
import Task from './Task'
import {  useState, useEffect } from "react"
import getConfig from '../utils/getConfig'

const StudentScreen = () => {

  const getC = getConfig()
    const [listtasks, setListtasks] = useState()
    console.log(getC)
    useEffect(() => {
     const URL = "https://english-classroom.onrender.com/api/v1/task/me"
    axios.get(URL, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))  
    }, [])

  return (
    <div>StudentScreen
        {/* {
            listtasks?.map(task => 
                <Task 
                key={task.url}
                />  )
        } */}

       <button href='www.google.com' >Slack</button>
       <button >Notion</button>

    </div>
  )
}

export default StudentScreen