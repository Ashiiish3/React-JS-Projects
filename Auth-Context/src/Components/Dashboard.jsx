import React, { useContext } from 'react'
import { FormContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const {user, logOut} = useContext(FormContext)
    return (
        <div className='dashboard'>
            <h3 data-testid = "token" >Token: {user.token}</h3>
            <button data-testid = "logout" onClick={logOut} >Logout</button>
        </div>
    )
}