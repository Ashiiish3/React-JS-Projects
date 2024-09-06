import { Error_Product_Data, Get_Product_Data, Request_Product_Data } from "../actionType"

const initialState = {
    isLoading : false,
    isError : false,
    product: []
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case Request_Product_Data:
            return {isLoading:true, isError: false, product:[]}
        case Get_Product_Data:
            return {isLoading: false, isError: false, product: action.payload}
        case Error_Product_Data:
            return {isLoading: false, isError: true, product: []}
        default:
            return state
    }
}