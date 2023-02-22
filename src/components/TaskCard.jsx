import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResponseTask from './ResponseTask'

const TaskCard = () => {


    const {id} = useParams()
    const [tasks, setTasks] = useState([''])
    useEffect(() => {
      axios.get(`https://classroom-ef3j.onrender.com/api/v1/task/${id}`)
        .then(res => setTasks(res.data))
        .catch(err => console.log(err))
      
      
    }, [])
    // console.log(tasks)
    
  return (
    <div className='prueba'>
      
      <div className='taskCard'>
      <div className='taskTitle'>  {tasks.title} <br /> </div>
       <hr className='hr' />
       <h3> {tasks.description} <br />
        </h3> 
      <h4> 
        </h4>  
    
        <div className='responseTask'>
        <ResponseTask 
        tasks={tasks}
        />
        </div>
       
     </div>
    </div>
  )
}

export default TaskCard