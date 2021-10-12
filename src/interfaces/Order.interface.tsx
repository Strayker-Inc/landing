import { IProduct } from "./Product.interface";


export interface ICart extends IProduct {
  qty: number
}

export interface IOrder {
  name: string,
  phone: number,
  payment: string,
  shipment: string,
  address: {
    address: string,
    city: string,
    comments?: string
  },
  products: ICart[]
}
