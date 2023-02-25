import { ADMIN_PRODUCT_FAILURE, ADMIN_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST, GET_HAIRPRODUCT_REQUEST, GET_MAKEUPPRODUCT_REQUEST, GET_SKINPRODUCTS_REQUEST, POST_PRODUCT_REQUEST } from "./ActionType";


const initialState = {
    isLoading:false,
    isError:false,
    makeUpProduct:[],
    skinProduct:[],
    hairProduct:[]
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
        case GET_SKINPRODUCTS_REQUEST:
            return {
                ...state,isLoading:false,skinProduct:payload
            } 
        case GET_HAIRPRODUCT_REQUEST:
            return {
                ...state,isLoading:false,hairProduct:payload
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