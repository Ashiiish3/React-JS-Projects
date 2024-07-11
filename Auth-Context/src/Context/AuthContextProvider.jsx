import React, {createContext, useState} from 'react'

export const FormContext = createContext()

export function AuthContextProvider({children}) {
    const [fetchData, setFetchData]= useState()
    
    return(
        <FormContext.Provider>{children}</FormContext.Provider>
    )
    
}