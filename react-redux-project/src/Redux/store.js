import { combineReducers, legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as productReducer } from "./Products/reducer";

const rootReducer = combineReducers({counterReducer, productReducer})

export const store = legacy_createStore(rootReducer);
