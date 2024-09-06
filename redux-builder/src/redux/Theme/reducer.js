import { SwitchToDark, SwitchToLight } from "../actionType";

const initialState = {
    theme : true,
    disabled: true
}
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SwitchToLight: 
        return {theme: true, disabled: action.payload};
        case SwitchToDark: 
        return {theme: false, disabled: action.payload}
        default: 
        return state
    }
}