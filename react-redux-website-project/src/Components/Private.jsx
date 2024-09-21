import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const Private = ({children}) => {
    const {token} = useSelector((data)=>data.AuthReducer)
    if(token==null){
        return <Navigate to={'/Login'} />
    }
    return children
}