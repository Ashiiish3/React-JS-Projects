import React from 'react'
import { useIdToken } from 'react-firebase-hooks/auth';
import { auth } from '../Service/Firebase';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({children}) {
    const [user] = useIdToken(auth);
    if(!user){
       return <Navigate to='/Login' />
    }
  return children
}