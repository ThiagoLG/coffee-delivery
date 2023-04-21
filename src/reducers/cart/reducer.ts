import produce from 'immer'
import { CartActionTypes } from '../../models/enums/CartActionTypes.enum'
import { ICartItem } from '../../models/interfaces/ICartItem'

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
    case CartActionTypes.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter(
          (cartItem) => cartItem.product.id !== action.payload.productId,
        )
      })
    }
    default:
      return {
        cartItems: [],
      }
  }
}
