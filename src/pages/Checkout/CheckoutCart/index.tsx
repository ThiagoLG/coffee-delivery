import { Trash } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { IncreaseDecreaseButton } from '../../../components/IncreaseDecreaseButton'
import { CartContext } from '../../../contexts/CartContext'
import { ICartItem } from '../../../models/interfaces/ICartItem'
import { defaultTheme } from '../../../styles/themes/default'
import { CartItemProduct, CheckoutCartContainer } from './styles'

export function CheckoutCart() {
  const { cartItems, removeProductsFromCart, updateProductInCart } =
    useContext(CartContext)

  function handleRemoveProduct(productId: number) {
    removeProductsFromCart(productId)
  }

  function handleDecreaseItemAction(cartItem: ICartItem) {
    if (cartItem.amount === 1) return false
    const cartItemtoUpdate = {
      ...cartItem,
      amount: cartItem.amount - 1,
    }
    updateProductInCart(cartItemtoUpdate)
  }

  function handleIncreaseItemAction(cartItem: ICartItem) {
    if (cartItem.amount === 99) return false
    const cartItemToUpdate = {
      ...cartItem,
      amount: cartItem.amount + 1,
    }
    updateProductInCart(cartItemToUpdate)
  }

  function handleChangeItemAction(
    cartItem: ICartItem,
    e: ChangeEvent<HTMLInputElement>,
  ) {
    const newValue = e.target.valueAsNumber

    if (!newValue || newValue < 1)
      updateProductInCart({ ...cartItem, amount: 1 })
    else if (newValue > 99) updateProductInCart({ ...cartItem, amount: 99 })
    else {
      updateProductInCart({ ...cartItem, amount: newValue })
    }
  }

  return (
    <CheckoutCartContainer>
      <ul className="cartProductContainer">
        {cartItems?.map((cartItem) => {
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
                      <IncreaseDecreaseButton
                        amountToBuy={cartItem.amount}
                        increaseAmountAction={handleIncreaseItemAction.bind(
                          null,
                          cartItem,
                        )}
                        decreaseAmountAction={handleDecreaseItemAction.bind(
                          null,
                          cartItem,
                        )}
                        key={cartItem.product.id}
                        changeProductAmountAction={handleChangeItemAction.bind(
                          null,
                          cartItem,
                        )}
                      />
                      <button
                        className="cartItemProduct__delete"
                        type="button"
                        onClick={handleRemoveProduct.bind(
                          null,
                          cartItem.product.id,
                        )}
                      >
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
