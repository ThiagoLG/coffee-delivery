import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/themes/default'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cartItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logo} alt="site logo" />
      </NavLink>

      <section className="headerActions">
        <div className="baseButton location">
          <MapPin weight="fill" size={22} color={defaultTheme.purple} />
          <span>São Paulo, SP</span>
        </div>

        <NavLink to="/checkout" title="Checkout">
          <div className="baseButton cart">
            <ShoppingCart weight="fill" size={22} color={defaultTheme.yellow} />
            {cartItems.length ? <div>{cartItems.length}</div> : <></>}
          </div>
        </NavLink>
      </section>
    </HeaderContainer>
  )
}
