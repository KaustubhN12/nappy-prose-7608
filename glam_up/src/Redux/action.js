import {
    GET_PRODUCT_SUCCESS,
    PRODUCT_FAILURE,
    PRODUCT_REQUEST,
  } from "./actionType";
  import {
    cartDataLoading,
    cartDataSuccess,
    cartDataError,
    deleteLoading,
    deleteSuccess,
    deleteError,
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
  
  //............cart page............

export const getData = (userid) => async (dispatch) => {
  try {
    dispatch({ type: cartDataLoading });
    await axios
      .get(`https://api-nykaa-database.vercel.app/cart/${userid}`)
      .then((res) => {
        dispatch({ type: cartDataSuccess, payload: res.data.cartdata });
      });
  } catch (err) {
    dispatch({ type: cartDataError });
  }
};

export const DeleteData = (userid, index) => async (dispatch) => {
  try {
    dispatch({ type: deleteLoading });
    await axios
      .delete(
        `https://api-nykaa-database.vercel.app/cart/${userid}/${index}`
      )
      .then((res) => {
        dispatch({ type: deleteSuccess, payload: res.data });
      });
  } catch (err) {
    dispatch({ type: deleteError });
  }
};