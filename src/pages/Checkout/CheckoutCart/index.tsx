import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { IncreaseDecreaseButton } from '../../../components/IncreaseDecreaseButton'
import { CartContext } from '../../../contexts/CartContext'
import { defaultTheme } from '../../../styles/themes/default'
import { CartItemProduct, CheckoutCartContainer } from './styles'

export function CheckoutCart() {
  const { cartItems } = useContext(CartContext)

  return (
    <CheckoutCartContainer>
      <ul className="cartProductContainer">
        {cartItems.map((cartItem) => {
          return (
            <>
              <CartItemProduct key={cartItem.product.id}>
                <div className="cartItemProduct__info">
                  <img
                    className="cartItemProduct__image"
                    src={cartItem.product.imageUrl}
                    alt="coffe-product"
                  />

                  <div className="cartItemProduct__details">
                    <span className="cartItemProduct__name">
                      {cartItem.product.name}
                    </span>
                    <div className="cartItemProduct__actions">
                      <IncreaseDecreaseButton />
                      <button className="cartItemProduct__delete" type="button">
                        <Trash color={defaultTheme.purple} size={16} />
                        REMOVER
                      </button>
                    </div>
                  </div>
                  <div className="cartItemProduct__prices">
                    <span className="cartItemProduct__currentPrice">
                      R$ {cartItem.product.price}
                    </span>
                  </div>
                </div>
              </CartItemProduct>
              <hr />
            </>
          )
        })}
      </ul>
    </CheckoutCartContainer>
  )
}
