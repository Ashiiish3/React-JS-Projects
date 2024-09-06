import { SwitchToDark, SwitchToLight } from "../actionType";

const initialState = {
    theme : true,
    disabled: true
}
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SwitchToLight: 
        return {theme: true, disabled: true};
        case SwitchToDark: 
        return {theme: false, disabled: true}
        default: 
        return state
    }
}