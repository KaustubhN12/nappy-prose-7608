import {legacy_createStore , combineReducers, applyMiddleware} from 'redux';
import {reducer as productReducer} from "./Reducer";
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "./Admin/Reducer"
const rootReducer = combineReducers({productReducer,AdminReducer});
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));
