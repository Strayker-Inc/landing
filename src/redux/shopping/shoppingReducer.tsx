import { IProduct, products_list } from '../../pages/Categories';
import * as actionTypes from './shoppingTypes';

interface cartProduct extends IProduct {
  qty: number
}

interface state {
  products: IProduct[],
  cart: cartProduct[]
  currentItem: any,
}

const INITIAL_STATE: state = {
  products: products_list,
  cart: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action:any) => {

  switch (action) {
    case actionTypes.ADD_TO_CART:
      // Get item from priduct list
      const item = state.products.find(prod => prod.id === action.payload.id);
      // Check if item is in cart already
      const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item )
          : [...state.cart, {...item, qty: 1}]
      };
    case actionTypes.REMOVE_TO_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case actionTypes.ADJUST:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
      };
    case actionTypes.LOAD_ITEM:
      return {};
    default:
      return state;
  }
}

export default shopReducer;
