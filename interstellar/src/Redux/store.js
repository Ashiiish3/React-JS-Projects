import {combineReducers, legacy_createStore} from 'redux'
import { reducer as loginReducer } from './Login/reducer'


const rootReducer = combineReducers({loginReducer})

export const store = legacy_createStore(rootReducer)
