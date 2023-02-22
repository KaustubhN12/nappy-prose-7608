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
  

  export const getProduct = (page) => (dispatch)=>{
      //console.log(param)
      dispatch(ProductRequest());
      axios.get(`https://api-nykaa-database.vercel.app/makeup?_page=${page}&_limit=20`)
      .then((res)=>{
           dispatch(getProductSuccess(res.data));
           console.log(res.data)
      }).catch((error)=>{
        dispatch(Productfalure())
      })
   }
  
  