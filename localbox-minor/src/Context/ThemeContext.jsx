import { createContext, useState } from "react";
// cpc
// create
export const ThemeContext = createContext()
// provider
export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState(false)
    document.body.style.backgroundColor = theme ? "rgb(17 24 39)" : "rgb(243 244 246)"
    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}
