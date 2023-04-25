import { Trash } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { IncreaseDecreaseButton } from '../../../components/IncreaseDecreaseButton'
import { CartContext } from '../../../contexts/CartContext'
import { ICartItem } from '../../../models/interfaces/ICartItem'
import {
  calculateAndFormatDiscountedPrice,
  formatCurrency,
} from '../../../lib/utils'
import { defaultTheme } from '../../../styles/themes/default'
import { CartItemProduct, CartSummary, CheckoutCartContainer } from './styles'

export function CheckoutCart() {
  const {
    cartItems,
    removeProductsFromCart,
    updateProductInCart,
    cartSummary,
  } = useContext(CartContext)

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
                    <div className="cartItemProduct__currentPrice">
                      <span className="cartItemProduct__currencySymbol">
                        R$
                      </span>{' '}
                      {formatCurrency(cartItem.totalPrice)}
                    </div>
                    <div className="cartItemProduct__originalPrice">
                      un.{' '}
                      <span className="cartItemProduct__currencySymbol">
                        R$
                      </span>{' '}
                      {calculateAndFormatDiscountedPrice(cartItem.product)}
                    </div>
                  </div>
                </div>
              </CartItemProduct>
              <hr />
            </>
          )
        })}
      </ul>
      <CartSummary>
        <div className="cartSummary__totalItems">
          <span>Total de Itens</span>
          <span>R$ {formatCurrency(cartSummary.totalItemsPrice)}</span>
        </div>
        <div className="cartSummary__delivery">
          <span>Entrega</span>
          <span>R$ {formatCurrency(cartSummary.deliveryPrice)}</span>
        </div>
        {cartSummary.discount !== 0 && (
          <div className="cartSummary__discount">
            <span>Desconto</span>
            <span>- R$ {formatCurrency(cartSummary.discount)}</span>
          </div>
        )}
        <div className="cartSummary__totalOrder">
          <span>Total</span>
          <span>R$ {formatCurrency(cartSummary.subTotal)}</span>
        </div>
      </CartSummary>
    </CheckoutCartContainer>
  )
}
