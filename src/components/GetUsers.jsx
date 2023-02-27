import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getConfig from '../utils/getConfig'

const GetUsers = () => {

    const [use, setUse] = useState([])
    const [user, setUser] = useState()

    useEffect(() => {
      const URL = "https://classroom-ef3j.onrender.com/api/v1/users"
      axios.get(URL, getConfig())
      .then(res =>setUse(res.data))
      .catch(err => console.log(err))
    
      
    }, [])
    
  const destroy = id => {
    const URL = `https://classroom-ef3j.onrender.com/api/v1/users/${id}`
    axios.delete(URL)
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
    
  }

  return (
    <div>
    {
      use.users?.map(us => (
       <ul  key={us.id}
       src={us.id}
       >
          <h2 className='tasksUser' > {us.id} <br /> {us.firstName}
          {/* <button onClick={() => destroy(user.id)}>X</button> */} </h2>
       </ul>
      ))
    }
    
    
       </div>
  )
}

export default GetUsers