import { GET_PRODUCT_SUCCESS,PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const initialState ={
    isLoading:false,
    isError:false,
    product:[]
}
export const reducer = (state=initialState, {type,payload}) =>{
  switch(type){
    case PRODUCT_REQUEST : return {...state ,isLoading:true }
    case GET_PRODUCT_SUCCESS : return {...state , isLoading:false, product:payload}
 
    case PRODUCT_FAILURE : return {...state ,isError:true }
  
    default : return state;
    }
  }