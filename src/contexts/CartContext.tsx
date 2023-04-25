import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { ICartItem } from '../models/interfaces/ICartItem'
import { ICartSummary } from '../models/interfaces/ICartSummary'
import {
  insertProductAction,
  removeProductAction,
  updateProductAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: ICartItem[]
  cartSummary: ICartSummary

  addProductsToCart: (cartItem: ICartItem) => void
  removeProductsFromCart: (productId: number) => void
  updateProductInCart: (cartItem: ICartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    cartSummary: {
      totalItemsPrice: 0,
      deliveryPrice: 0,
      discount: 0,
      subTotal: 0,
    },
  })
  const { cartItems, cartSummary } = cartState

  useEffect(() => {}, [cartItems])

  function addProductsToCart(cartItem: ICartItem) {
    dispatch(insertProductAction(cartItem))
  }

  function removeProductsFromCart(productId: number) {
    dispatch(removeProductAction(productId))
  }

  function updateProductInCart(cartItem: ICartItem) {
    dispatch(updateProductAction(cartItem))
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductsToCart,
        removeProductsFromCart,
        updateProductInCart,
        cartSummary,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
