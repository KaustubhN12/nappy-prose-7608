import { LOGGED_OUT, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType"



export const getLoginRequest = () =>{
    return {type:LOGIN_REQUEST}
}

export const getLoginFailure = () =>{
    return {type:LOGIN_FAILURE}
}

export const getLoginSuccess = (payload) =>{
    return {type:LOGIN_SUCCESS,payload}
}

export const getSignOutRequest = () => {
    return {type:LOGGED_OUT}
}

export const getlogin = (payload) => (dispatch) => {
    dispatch(getLoginSuccess(payload));
}

export const getSignIn = (dispatch) => {
    dispatch(getLoginRequest());
}

export const getSignOut = (dispatch) => {
    dispatch(getSignOutRequest());
}