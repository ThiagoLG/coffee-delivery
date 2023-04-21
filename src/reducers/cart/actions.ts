/* eslint-disable no-unused-vars */
import { CartActionTypes } from '../../models/enums/CartActionTypes.enum'
import { ICartItem } from '../../models/interfaces/ICartItem'

export function insertProductAction(cartItem: ICartItem) {
  return {
    type: CartActionTypes.INSERT_PRODUCT,
    payload: {
      cartItem,
    },
  }
}

export function removeProductAction(productId: number) {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}

export function updateProductAction(cartItem: ICartItem) {
  return {
    type: CartActionTypes.UPDATE_PRODUCT,
    payload: {
      cartItem,
    },
  }
}
