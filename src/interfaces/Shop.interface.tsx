import { ICart } from "./Order.interface";
import { IProduct } from "./Product.interface";

export interface IState {
  products: IProduct[],
  cart: ICart[]
  total: number,
  currentItem: any,
}
