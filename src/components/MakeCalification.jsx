import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import getConfig from "../utils/getConfig";

const MakeCalification = ({tasks}) => {
    const [search, setSearch] = useState('');
 
  const { handleSubmit, reset, register } = useForm();
//     let data = {
//   response: ''
//     }
  let id = tasks.id;
    
 

  const submit = async (data) => {
    try{
    const URL = `https://classroom-ef3j.onrender.com/api/v1/task/teacher/${id}`;
    const res = await axios.patch(URL, data)
    setSearch(res)
    console.log(res)
} catch (error) {
    console.log(error.message)
    console.log(error.response.data)
    console.log({res})
}
  
    //   console.log(data.response)
    //   console.log(id)
    return data
  };
//   console.log(data)
//   console.log(submit);

// console.log(id)


  return (
    <form onSubmit={handleSubmit(submit)}>
      <ul> <input type="text"     {...register('calification') }
   /> <br />
   {
      <h1>  {tasks.calification}</h1>
   }
 <button>Calificar</button> <br />

      


      
      </ul>
      
       
        

     
    </form>
  );
};

export default MakeCalification;
