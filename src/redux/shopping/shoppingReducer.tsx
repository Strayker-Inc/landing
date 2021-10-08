import { IProduct } from '../../pages/Categories';
import actionTypes from './shoppingTypes';

export interface ICart extends IProduct {
  qty: number
}

export interface IState {
  products: IProduct[],
  cart: ICart[]
  total: number,
  currentItem: any,
}

const INITIAL_STATE: IState = {
  products: [],
  cart: [],
  total: 0,
  currentItem: null,
}
interface IAction {
  type: actionTypes,
  payload: any,
}

const getProductFromCart = (productId: string, cart: ICart[]) => {
  const product = cart.find(item => item.id === productId);
  return product;
}

const shopReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productToAdd: IProduct = action.payload.product;
      state.total += productToAdd.cost;
      // Check if Item is in cart already
      let inCart = state.cart.some(item => item.id === productToAdd.id);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === productToAdd.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload.product, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      let product = getProductFromCart(action.payload.id, state.cart);
      // TODO: Update the total cost of cart multiply the qty of products by cost of each and substract from total
      if (product) state.total -= product.cost;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      switch (action.payload.action) {
        case "remove":
          state.total -= action.payload.product.cost;
          break;
        case "add":
          state.total += action.payload.product.cost;
          break;
        default:
          break;
      }
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, qty: + action.payload.qty }
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
