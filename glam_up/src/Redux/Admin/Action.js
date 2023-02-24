import { ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, GET_MAKEUPPRODUCT_REQUEST, POST_PRODUCT_REQUEST } from "./ActionType";
import axios from "axios";

export const adminProductRequst = () => {
    return {type:ADMIN_PRODUCT_REQUEST}
}

export const adminProductFailure = () => {
    return {type:ADMIN_PRODUCT_FAILURE}
}

export const getMakeupProductSuccess = (payload) => {
    return {type:GET_MAKEUPPRODUCT_REQUEST,payload}
}

export const postProductSuccess = () => {
    return {type:POST_PRODUCT_REQUEST}
}

export const deleteProductSuccess = () => {
    return {type:DELETE_PRODUCT_REQUEST}
}

export const getMakeUpProduct = (dispatch) => {
    dispatch(adminProductRequst());
    axios.get("https://api-nykaa-database.vercel.app/makeup").then((res)=>{
        dispatch(getMakeupProductSuccess(res.data));
    }).catch((err)=>{
        dispatch(adminProductFailure());
    })
}

export const postProduct = (payload) => (dispatch) => {
    dispatch(adminProductRequst());
    axios.post(`https://api-nykaa-database.vercel.app/makeup`,payload).then((res)=>{
        dispatch(postProductSuccess());
    }).catch((err)=> {
        dispatch(adminProductFailure());
    })
}

export const deleteProduct = (id) => (dispatch) => {
    dispatch(adminProductRequst());
   return axios.delete(`https://api-nykaa-database.vercel.app/makeup/${id}`).then((res)=>{
        dispatch(deleteProductSuccess());
    }).catch((err)=>{
        dispatch(adminProductFailure());
    })
}