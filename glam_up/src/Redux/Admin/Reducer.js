import { ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, GET_MAKEUPPRODUCT_REQUEST, POST_PRODUCT_REQUEST } from "./ActionType";


const initialState = {
    isLoading:false,
    isError:false,
    makeUpProduct:[],
}

export const reducer = (state=initialState,{type,payload}) => {

    switch(type){
        case ADMIN_PRODUCT_REQUEST:
            return{
                ...state,isLoading:true
            }
        case ADMIN_PRODUCT_FAILURE:
            return {
                ...state,isError:true
            } 
        case GET_MAKEUPPRODUCT_REQUEST:
            return {
                ...state,isLoading:false,makeUpProduct:payload
            } 
        case POST_PRODUCT_REQUEST:
            return {
                ...state,isLoading:false
            } 
        case DELETE_PRODUCT_REQUEST:
            return {
                ...state,isLoading:false
            }             
        default:
            return state;
    }

}