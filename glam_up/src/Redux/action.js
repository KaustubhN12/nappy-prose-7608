import {
    GET_PRODUCT_SUCCESS,
    PRODUCT_FAILURE,
    PRODUCT_REQUEST,
  } from "./actionType";
  import axios from 'axios';
  export const getProductSuccess = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload };
  };
  export const ProductRequest = () => {
    return { type: PRODUCT_REQUEST };
  };
  export const Productfalure = () => {
    return { type: PRODUCT_FAILURE };
  };
  

  export const getProduct = (location) => (dispatch)=>{
    const url= `https://api-nykaa-database.vercel.app${location}`
      dispatch(ProductRequest());
      axios.get(url)
      .then((res)=>{
           dispatch(getProductSuccess(res.data));
           console.log(res.data)
      }).catch((error)=>{
        dispatch(Productfalure())
      })
   }
  
  