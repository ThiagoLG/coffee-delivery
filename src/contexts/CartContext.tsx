import { createContext, ReactNode, useReducer } from 'react'
import { ICartItem } from '../models/ICartItem'
import { insertProductAction } from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface CartContextType {
  cartItems: ICartItem[]
  addProductsToCart: (cartItem: ICartItem) => void
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProductsToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
