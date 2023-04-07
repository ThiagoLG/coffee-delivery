/* eslint-disable no-unused-vars */
import { ICartItem } from '../../models/ICartItem'

export enum CartActionTypes {
  INSERT_PRODUCT = 'INSERT_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function insertProductAction(cartItem: ICartItem) {
  return {
    type: CartActionTypes.INSERT_PRODUCT,
    payload: {
      cartItem,
    },
  }
}

export function removeProducAction(productId: number) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}
