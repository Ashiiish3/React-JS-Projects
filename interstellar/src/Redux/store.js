import {combineReducers, legacy_createStore} from 'redux'
import { reducer as dashboardReducer } from './Dashboard/reducer'

const rootReducer = combineReducers({dashboardReducer})

export const store = legacy_createStore(rootReducer)