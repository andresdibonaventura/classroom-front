import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import getConfig from '../utils/getConfig'
import { useNavigate, useParams } from 'react-router'

const TeacherScreen = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [users, setUsers] = useState()
  const {handleSubmit, reset, register} = useForm()
    useEffect(() => {
      const URL = "https://classroom-ef3j.onrender.com/api/v1/users/teacher"
      axios.get(URL, getConfig())
      .then(res =>setUsers(res.data))
      .catch(err => console.log(err))
    
    }, [])
    // console.log(user)
  

    const nav = id => {
      navigate(`/studentsTask/${id}`)
    }
       
   const submit = (data) => {
   const URL ="https://classroom-ef3j.onrender.com/api/v1/task/teacher"
   axios.post(URL, data, getConfig())
   .then(res => res.data)
   .catch(err => console.log(err)) 
   console.log(data)
   }
      return (
        <div>


        <ul className='col8 students'>
         
            {
              users?.map(user => (
                <li   
                  key = {user.id}
                  src= {user}
                >
                  <div className='tasksUser' >
                  {user.id}  <>&nbsp;&nbsp;&nbsp;&nbsp;</>
               <h3 onClick={() => nav(user.id)}>
                 {user.firstName} < > </>
                  {user.lastName}
               </h3>
                
                
                  </div>
              
                </li>
                
               
              ))
            }
         
        </ul>
           {/* {user?.users.firstName} */}
           <form  className='col4 postTask login__form'  onSubmit={handleSubmit(submit)}>
            <div>
              <label htmlFor="title">title</label> 
              <input className='inputText' type="text" id='name' {...register('title')} />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <textarea className='inputText2' type="text" id='genre' {...register('description')} />
            </div>
            <div>
              <label htmlFor="userId">user</label>
              <input className='inputText3' type="text" id='genre' {...register('userId')} />
            </div>
        
            <button >Submit</button>
          </form>
    
       
        </div>
        
      )
    }




export default TeacherScreen