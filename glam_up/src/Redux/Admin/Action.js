import { ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, GET_HAIRPRODUCT_REQUEST, GET_MAKEUPPRODUCT_REQUEST, GET_SKINPRODUCTS_REQUEST, POST_PRODUCT_REQUEST } from "./ActionType";
import axios from "axios";
import { assignRef } from "@chakra-ui/react";

export const adminProductRequst = () => {
    return {type:ADMIN_PRODUCT_REQUEST}
}

export const adminProductFailure = () => {
    return {type:ADMIN_PRODUCT_FAILURE}
}

export const getMakeupProductSuccess = (payload) => {
    return {type:GET_MAKEUPPRODUCT_REQUEST,payload}
}

export const getSkinProductSuccess = (payload) => {
    return {type:GET_SKINPRODUCTS_REQUEST,payload}
}

export const getHairProductSuccess = (payload) => {
    return {type:GET_HAIRPRODUCT_REQUEST,payload}
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

export const getSkinProduct = (dispatch) => {
    dispatch(adminProductRequst());
    axios.get("https://api-nykaa-database.vercel.app/skin").then((res)=>{
        dispatch(getSkinProductSuccess(res.data));
    }).catch((err)=>{
        dispatch(adminProductFailure());
    })
}

export const getHairProduct = (dispatch) => {
    dispatch(adminProductRequst());
    axios.get("https://api-nykaa-database.vercel.app/hair").then((res)=>{
        dispatch(getHairProductSuccess(res.data));
    }).catch((err)=>{
        dispatch(adminProductFailure());
    })
}

export const postProduct = (payload) => (dispatch) => {
    dispatch(adminProductRequst());
   return axios.post("https://api-nykaa-database.vercel.app/makeup",payload).then((res)=>{
        dispatch(postProductSuccess());
        console.log(res.data)
    }).catch((err)=> {
        dispatch(adminProductFailure());
    })
}

export const deleteProduct = (id,category) => (dispatch) => {
    dispatch(adminProductRequst());
   return axios.delete(`https://api-nykaa-database.vercel.app/${category}/${id}`).then((res)=>{
        dispatch(deleteProductSuccess());
    }).catch((err)=>{
        dispatch(adminProductFailure());
    })
}