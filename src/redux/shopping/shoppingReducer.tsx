import { IProduct, products_list } from '../../pages/Categories';
import * as actionTypes from './shoppingTypes';

export interface ICart extends IProduct {
  qty: number
}

export interface IState {
  products: IProduct[],
  cart: ICart[]
  currentItem: any,
}

const INITIAL_STATE: IState = {
  products: products_list,
  cart: [],
  currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products.find(
        (product) => product.id.toString() === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id.toString() === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id.toString() === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
