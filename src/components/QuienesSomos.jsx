import React from 'react'
import teacher1 from "../assets/img/teacher1.jpg"
import teacher2 from "../assets/img/teacher2.jpg"
import ReturnButton from './ReturnButton'

const QuienesSomos = () => {
  return (
    <div>
        <ReturnButton />
        <img  className='teacher-pic' src={teacher1} alt="" /> <img className='teacher-pic' src={teacher2} alt="" />
    </div>
  )
}

export default QuienesSomos