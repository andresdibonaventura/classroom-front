import axios from 'axios'
import React from 'react'

const TeacherTask = () => {

    const [first, setfirst] = useState(second)

    useEffect(() => {
      axios.get(`https://classroom-ef3j.onrender.com/api/v1/task/teacher/${id}`)
        .then()
        .catch()
  
      
    }, [])
    

  return (
    <div>TeacherTask</div>
  )
}

export default TeacherTask