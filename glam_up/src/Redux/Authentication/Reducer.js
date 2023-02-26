import { LOGGED_OUT, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";

const initialState = {
    isAuth:false,
    userName:"",
}

export const reducer = (state=initialState,{type,payload}) => {

    switch(type){
        case LOGIN_REQUEST:
            return {
                ...state,isAuth:true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,isAuth:true,userName:payload
            }
        case LOGGED_OUT:
            return {
                ...state,isAuth:false,userName:""
            }
        default:
            return state;
    }

}