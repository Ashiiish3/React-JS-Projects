import { createContext, useState } from "react";
// cpc
// create
export const ThemeContext = createContext()
// provide
export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState(false)
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}