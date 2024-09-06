import { decrement, increment } from "../actionType"

export const AddValue = () => {
    return ({type: increment, payload: 1})
}
export const ReduceValue = () => {
    return ({type: decrement, payload: 1})
}