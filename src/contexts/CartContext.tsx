import { createContext, ReactNode, useReducer } from 'react'
import { ICartItem } from '../models/interfaces/ICartItem'
import {
  insertProductAction,
  removeProductAction,
  updateProductAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: ICartItem[]

  addProductsToCart: (cartItem: ICartItem) => void
  removeProductsFromCart: (productId: number) => void
  updateProductInCart: (cartItem: ICartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] })
  const { cartItems } = cartState

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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
