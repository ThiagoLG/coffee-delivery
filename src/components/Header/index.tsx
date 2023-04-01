import {
  HeaderCart,
  HeaderContainer,
  HeaderLocation,
  HeaderRegion,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
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
        </HeaderCart>
      </HeaderRegion>
    </HeaderContainer>
  )
}
