import {legacy_createStore , combineReducers, applyMiddleware} from 'redux';
import {reducer as productReducer} from "./Reducer";
import { CartReducer } from './CartPage/reducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({productReducer,CartReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer , applyMiddleware(thunk));
