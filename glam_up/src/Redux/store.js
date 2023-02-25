import {legacy_createStore , combineReducers, applyMiddleware} from 'redux';
import {reducer as productReducer} from "./Reducer";
import {reducer as adminReducer} from "./Admin/Reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({productReducer,adminReducer});
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));
