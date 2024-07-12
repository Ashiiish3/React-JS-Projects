import React, { createContext, useState } from 'react'

export const FormContext = createContext()

export function AuthContextProvider({children}) {
    const UsereObj = {
        isAuth: false,
        loading: false, 
        error: null,
        token: ""
    }
    const [user, setUser]= useState(UsereObj)
    const logIn = (value)=>{
        setUser({isAuth: true, loading: false, error: null, token: value})
    }
    const logOut = ()=>{
        setUser({isAuth: false, loading: false, error: null, token: ""})
    }
    return(
        <FormContext.Provider value={{user, logIn, logOut}} >{children}</FormContext.Provider>
    )
    
}