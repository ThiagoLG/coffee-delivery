import { IProduct } from './IProductItem'

export interface ICartItem {
  product: IProduct
  amount: number
  totalPrice: number
}
