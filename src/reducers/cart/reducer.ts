import produce from 'immer'
import { calculateDiscountedPrice } from '../../lib/utils'
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
        const discountedPrice = calculateDiscountedPrice(
          action.payload.cartItem.product,
        )

        if (currentProductIndex === -1) {
          draft.cartItems.push({
            ...action.payload.cartItem,
            totalPrice: discountedPrice * action.payload.cartItem.amount,
          })
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
    case CartActionTypes.UPDATE_PRODUCT: {
      const currentProductIndex = state.cartItems.findIndex(
        (cartItem) =>
          cartItem.product.id === action.payload.cartItem.product.id,
      )
      const discountedPrice = calculateDiscountedPrice(
        action.payload.cartItem.product,
      )
      return produce(state, (draft) => {
        draft.cartItems[currentProductIndex] = {
          ...action.payload.cartItem,
          totalPrice: discountedPrice * action.payload.cartItem.amount,
        }
      })
    }
    default:
      return {
        cartItems: [],
      }
  }
}
