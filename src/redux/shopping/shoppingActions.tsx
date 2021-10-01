import { IProduct } from '../../pages/Categories';
import * as actionTypes from './shoppingTypes';

export const addToCart = (productId: string) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      productId
    }
  }
}

export const removeFromCart = (productId: string) => {
  return {
    type: actionTypes.REMOVE_TO_CART,
    payload: {
      productId
    }
  }
}

export const adjutQty = (productId: string, qty: number) => {
  return {
    type: actionTypes.ADJUST,
    payload: {
      productId,
      qty
    }
  }
}
