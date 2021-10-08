import { IProduct } from '../../pages/Categories';
import { ICart } from './shoppingReducer';
import actionTypes from './shoppingTypes';

export const addToCart = (product: IProduct) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }
}

export const removeFromCart = (productId: string) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: productId
    }
  }
}

export const adjustQty = (product: ICart, qty: number, action: "remove" | "add") => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      product,
      qty,
      action
    }
  }
}

export const loadCurrentItem = (product: IProduct) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: product
  }
}
