import produce from 'immer'
import { calculateDiscountedPrice } from '../../lib/utils'
import { CartActionTypes } from '../../models/enums/CartActionTypes.enum'
import { ICartItem } from '../../models/interfaces/ICartItem'
import { ICartSummary } from '../../models/interfaces/ICartSummary'

export interface CartState {
  cartItems: ICartItem[]
  cartSummary: ICartSummary
}

function calculateSummary(cartItems: ICartItem[]): ICartSummary {
  return cartItems.reduce(
    (acc, curr) => {
      acc.totalItemsPrice += curr.totalPrice
      acc.discount += curr.product.discountPercent
        ? (curr.product.discountPercent / 100) *
          curr.product.price *
          curr.amount
        : 0
      acc.subTotal = acc.totalItemsPrice + acc.deliveryPrice - acc.discount
      return acc
    },
    {
      totalItemsPrice: 0,
      deliveryPrice: 990,
      discount: 0,
      subTotal: 0,
    },
  )
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

        draft.cartSummary = calculateSummary(draft.cartItems)
      })
    }
    case CartActionTypes.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.cartItems = draft.cartItems.filter(
          (cartItem) => cartItem.product.id !== action.payload.productId,
        )
        draft.cartSummary = calculateSummary(draft.cartItems)
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
        draft.cartSummary = calculateSummary(draft.cartItems)
      })
    }
    default:
      return {
        cartItems: [],
        cartSummary: {
          totalItemsPrice: 0,
          deliveryPrice: 0,
          discount: 0,
          subTotal: 0,
        },
      }
  }
}
