import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";

const rootReducer = combineReducers({AuthReducer})
export const store = legacy_createStore(rootReducer)