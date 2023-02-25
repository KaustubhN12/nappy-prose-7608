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
  
  //............cart page............

  import axios from "axios";
import {
  cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
} from "./actionType";

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