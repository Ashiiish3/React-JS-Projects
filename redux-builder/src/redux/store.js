import { combineReducers, legacy_createStore } from "redux";
import { reducer as ThemeReducer } from "./Theme/reducer";
import { reducer as CounterReducer } from "./Counter/reducer";

const rootReducer = combineReducers({CounterReducer, ThemeReducer})
export const store = legacy_createStore(rootReducer)