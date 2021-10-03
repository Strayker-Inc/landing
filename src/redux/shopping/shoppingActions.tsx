import { IProduct } from '../../pages/Categories';
import * as actionTypes from './shoppingTypes';

export const addToCart = (productId: string) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: productId
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

export const adjustQty = (productId: string, qty: number) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: productId,
      qty
    }
  }
}

export const loadCurrentItem = (product: IProduct) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: product
  }
}
