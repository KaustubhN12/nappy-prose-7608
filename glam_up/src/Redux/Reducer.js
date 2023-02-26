import { GET_PRODUCT_SUCCESS,PRODUCT_FAILURE, PRODUCT_REQUEST ,cartDataLoading,
  cartDataSuccess,
  cartDataError,
  deleteLoading,
  deleteSuccess,
  deleteError,
  CART_DATA_REMOVE,
  CART_DATA_ADD,
  CART_DATA_EMPTY,} from "./actionType"

const initialState ={
    isLoading:false,
    isError:false,
    product:[],
    cartData:[],
  totalPrice: 0,
  totaldiscount:50
   
}
export const reducer = (state=initialState, {type,payload}) =>{
  switch(type){
    case PRODUCT_REQUEST : return {...state ,isLoading:true }
    case GET_PRODUCT_SUCCESS : return {...state , isLoading:false, product:payload}
    case PRODUCT_FAILURE : return {...state ,isError:true }
    case CART_DATA_ADD: return {
      ...state,
      cartData: [...state.cartData, payload],
      totalPrice: state.totalPrice + payload.price,
      totaldiscount:state.totalPrice - payload.totaldiscount,
    };
    case CART_DATA_REMOVE:
    return {
        ...state,
        cartData: state.cartData.filter((el)=> el.id !== payload.id),
        totalPrice: state.totalPrice - payload.price
       }
     case CART_DATA_EMPTY :
       return {...state, cartData:[]}
    
   default : return state;
    }
  }

  //.............cart page........

  
  let initialState1 = {
    loading: false,
    data: [],
    error: false,
    Totalprice: 0,
    Totaldiscountprice: 0,
    ItemCount: 0,
    deletemsg: "",
  };
  
  export const CartReducer = (state = initialState1, { type, payload }) => {
    switch (type) {
      case cartDataLoading: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case cartDataSuccess: {
        let beforeDiscoutPrice = 0;
        let Atdiscountprice = 0;
        payload.map(({ price, discountedprice }) => {
          beforeDiscoutPrice += price;
          Atdiscountprice += discountedprice;
        });
        return {
          ...state,
          loading: false,
          data: payload,
          error: false,
          ItemCount: payload.length,
          Totalprice: beforeDiscoutPrice,
          Totaldiscountprice: Atdiscountprice,
        };
      }
      case cartDataError: {
        return {
          loading: false,
          data: [],
          error: true,
        };
      }
  
      case deleteLoading: {
        return {
          ...state,
          loading: true,
        };
      }
      case deleteSuccess: {
        return {
          ...state,
          deletemsg: payload,
        };
      }
      case deleteError: {
        return {
          ...state,
          loading: true,
          error: true,
          deletemsg: "",
        };
      }
      default:
        return state;
    }
  };