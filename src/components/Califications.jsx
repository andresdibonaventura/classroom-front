import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import getConfig from "../utils/getConfig";
import MakeCalification from "./MakeCalification";

const Califications = () => {
    const [tasks, setTasks] = useState([''])
    const {id} = useParams()

  


useEffect(() => {
  axios.get(`https://classroom-ef3j.onrender.com/api/v1/task/${id}`)
  .then(res => setTasks(res.data))
  .catch(err => console.log(err))


 
}, [])


 
  // console.log(data)


console.log(id)


  return (
 
    <div className='prueba'>
    
    <div className='taskCard'>
    <div className='taskTitle'>  {tasks.title} <br /> </div>
     <hr className='hr' />
     <h3> {tasks.description} <br />
      </h3> 
      <h3>{tasks.response}</h3>
      
        <MakeCalification 
        tasks={tasks}
        />
      
  
        <h3>{tasks.calification}</h3>
     
     
   </div>
  </div>

  );
};

export default Califications;
