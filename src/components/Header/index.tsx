import {
  HeaderCart,
  HeaderContainer,
  HeaderLocation,
  HeaderRegion,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="site logo" />

      <HeaderRegion>
        <HeaderLocation>
          <MapPin weight="fill" size={22} color={defaultTheme.purple} />
          <span>São Paulo, SP</span>
        </HeaderLocation>

        <HeaderCart>
          <ShoppingCart weight="fill" size={22} color={defaultTheme.yellow} />
          {cartItems.length ? <div>{cartItems.length}</div> : <></>}
        </HeaderCart>
      </HeaderRegion>
    </HeaderContainer>
  )
}
