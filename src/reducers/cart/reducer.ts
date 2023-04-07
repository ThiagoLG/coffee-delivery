import produce from 'immer'
import { ICartItem } from '../../models/ICartItem'
import { CartActionTypes } from './actions'

export interface CartState {
  cartItems: ICartItem[]
}

export function cartReducer(state: CartState, action: any): CartState {
  switch (action.type) {
    case CartActionTypes.INSERT_PRODUCT: {
      const currentProductIndex = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.product.id === action.payload.cartItem.product.id,
      )

      return produce(state, (draft) => {
        if (currentProductIndex === -1) {
          draft.cartItems.push(action.payload.cartItem)
        } else {
          draft.cartItems[currentProductIndex] = action.payload.cartItem
        }
      })
    }
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        cartItems: [],
      }
    default:
      return {
        cartItems: [],
      }
  }
}
