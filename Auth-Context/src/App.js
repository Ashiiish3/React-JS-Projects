import React, { useContext } from 'react'
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard'
import { FormContext } from './Context/AuthContextProvider'

export default function App() {
  const {user} = useContext(FormContext)
  return (
    <div>
        {user.isAuth ? <Dashboard /> : <Login />}
    </div>
  )
}
