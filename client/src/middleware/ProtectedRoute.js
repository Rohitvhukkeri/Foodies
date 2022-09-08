import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute (props) 
   (
     props.auth === true ? props.children : <Navigate replace to={`/login`}/>
  )


export default ProtectedRoute