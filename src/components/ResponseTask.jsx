import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import getConfig from "../utils/getConfig";

const ResponseTask = ({tasks}) => {
    const [search, setSearch] = useState('');
 
  const { handleSubmit, reset, register } = useForm();
//     let data = {
//   response: ''
//     }
  let id = tasks.id;
    
 

  const submit =  (data) => {
    console.log(id)
    const URL = `https://classroom-ef3j.onrender.com/api/v1/task/me/${id}`;
  console.log(data)
    axios
      .patch(URL, data)
      .then(({data}) => { setSearch(data)
    })
      .catch((err) => console.log(err));
  
    //   console.log(data.response)
    //   console.log(id)
    return data
  };
//   console.log(data)
//   console.log(submit);

// console.log(id)


  return (
    <form onSubmit={handleSubmit(submit)}>
      <ul> <textarea type="text"     {...register('response') }
   /> <br />
   {
    <div>
        Response submited!!!'
    </div>
   }
 <button>responder</button> <br />

        {tasks.response}

      
      </ul>
      
       
        
        

     
    </form>
  );
};

export default ResponseTask;
