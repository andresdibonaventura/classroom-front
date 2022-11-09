import axios from 'axios'
import React from 'react'
import Task from './Task'
import {  useState, useEffect } from "react"

const StudentScreen = () => {
    const [listtasks, setListtasks] = useState()
    useEffect(() => {
     
    axios.get("https://english-classroom.onrender.com/api/v1/task/me")
    .then(res => setListtasks(res.data))
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