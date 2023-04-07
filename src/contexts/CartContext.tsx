import { createContext, ReactNode } from 'react'

interface CartContextType {}
interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  return <CartContextProvider>{children}</CartContextProvider>
}
