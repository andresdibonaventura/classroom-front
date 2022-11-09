import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from "react-redux"

const PrivateRouter = () => {
 const logged = useSelector(state => state.setUser)
 if (logged){
     <Outlet />
 } else {
    < Navigate to='/login' />
 }
}

export default PrivateRouter