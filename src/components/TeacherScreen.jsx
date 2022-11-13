import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import getConfig from '../utils/getConfig'

const TeacherScreen = () => {

  const [user, setUser] = useState()

    useEffect(() => {
      const URL = "https://english-classroom.onrender.com/api/v1/task/teacher"
      axios.get(URL, getConfig())
      .then(res =>setUser(res.data))
      .catch(err => console.log(err))
    
    }, [])
    console.log(user)
    // const postTask = () => {
    //   const URL ="https://english-classroom.onrender.com/api/v1/task/teacher"
    //     axios.post(URL, getConfig())
    //     .then(res => res.data)
    //     .catch(err => console.log(err))
    
   
    // }
       
    const defaultValuesForm = {
        title: "",
        description: "",
        userId: ""
      }
    
     
    
      return (
        <div>

       
        <ul>
         
            {
              user?.users.map(user => (
                <li   
                  key = {user.users.id}
                >
                {user?.users?.firstName}
                </li>
              ))
            }
         
        </ul>
           {user?.users.firstName}
           <form >
            {/* <div>
              <label htmlFor="title">title</label>
              <input type="text" id='name' {...postTask('name')} />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <input type="text" id='genre' {...postTask('genre')} />
            </div>
            <div>
              <label htmlFor="userId">user</label>
              <input type="text" id='genre' {...postTask('genre')} />
            </div> */}
            <div>hola</div>
            {/* <button onClick={postTask}>Submit</button> */}
          </form>
    
       
        </div>
        
      )
    }
    
 


export default TeacherScreen