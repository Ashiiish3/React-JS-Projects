import { combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as ProductReducer } from "./Products/reducer";

const rootReducer = combineReducers({AuthReducer, ProductReducer})
export const store = legacy_createStore(rootReducer)