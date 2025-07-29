import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <progress className="progress w-56" value={0} max="100"></progress>
    }
    if(user){
        return children
    }
  return (
   <Navigate to='/login' state={{form: location}} replace></Navigate>
  )
}

export default PrivateRoute