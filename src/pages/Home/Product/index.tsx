import { ArrowUUpLeft, Info, ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { IncreaseDecreaseButton } from '../../../components/IncreaseDecreaseButton'
import { CartContext } from '../../../contexts/CartContext'
import { ICartItem } from '../../../models/interfaces/ICartItem'
import { IProduct } from '../../../models/interfaces/IProductItem'
import { defaultTheme } from '../../../styles/themes/default'
import {
  BackProductCard,
  FrontProductCard,
  ProductBuyContainer,
  ProductContainer,
  ProductTag,
} from './styles'

export function Product(product: IProduct) {
  const [amountToBuy, setAmountToBuy] = useState<number>(1)
  const [flippedCard, setFlippedCard] = useState<boolean>(false)

  const { addProductsToCart } = useContext(CartContext)

  function formatCurrency(price: number) {
    if (!price || price <= 0) return 'R$ 0,00'
    return (price / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  function handleChangeProductAmount(e: ChangeEvent<HTMLInputElement>) {
    const receivedValue = e.target.valueAsNumber
    setAmountToBuy(receivedValue > 99 ? 99 : receivedValue)
  }

  function increaseAmount() {
    if (amountToBuy < 99) setAmountToBuy((value) => value + 1)
  }

  function decreaseAmount() {
    if (amountToBuy > 1) setAmountToBuy((value) => value - 1)
  }

  function calculateDiscountedPrice(price: number) {
    if (!product.discountPercent) return formatCurrency(product.price)

    const discountInCash = (product.discountPercent / 100) * product.price
    return formatCurrency(product.price - discountInCash)
  }

  function handleAddToCart() {
    const cartItem: ICartItem = {
      product,
      amount: amountToBuy,
      totalPrice: (amountToBuy * product.price) / 100,
    }
    addProductsToCart(cartItem)
  }

  function handleFlipCard() {
    setFlippedCard(!flippedCard)
  }

  return (
    <ProductContainer className={flippedCard ? 'flipped' : ''}>
      <FrontProductCard className="front">
        {product.additionalInfos && product.additionalInfos.length ? (
          <button className="flipCardButton" onClick={handleFlipCard}>
            <Info size={32} color={defaultTheme['purple-dark']} />
          </button>
        ) : (
          <></>
        )}
        <img src={product.imageUrl} alt="Product image" />

        <div className="tagsContainer">
          {product.categories?.map((productCategory) => {
            return (
              <ProductTag key={productCategory}>{productCategory}</ProductTag>
            )
          })}
        </div>
        <span className="title">{product.name}</span>
        <span className="description">{product.description}</span>

        <ProductBuyContainer className="productBuyContainer">
          {product.discountPercent ? (
            <section className="discountValue">
              R${formatCurrency(product.price)}
            </section>
          ) : (
            <></>
          )}
          <section className="priceContainer">
            <span className="pricePrefix">R$</span>
            <span className="priceValue">
              {calculateDiscountedPrice(product.price)}
            </span>
          </section>
          <IncreaseDecreaseButton
            increaseAmountAction={increaseAmount}
            decreaseAmountAction={decreaseAmount}
            amountToBuy={amountToBuy}
            changeProductAmountAction={handleChangeProductAmount}
          />
          <button className="cartButton" onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} color="white" weight="fill" />
          </button>
        </ProductBuyContainer>
      </FrontProductCard>

      <BackProductCard className="back">
        <button className="flipCardButton" onClick={handleFlipCard}>
          <ArrowUUpLeft size={32} color={defaultTheme['purple-dark']} />
        </button>

        <h4>Informações sobre o produto:</h4>
        <ul>
          {product.additionalInfos &&
            product.additionalInfos.length &&
            product.additionalInfos.map((info) => {
              return <li key={info}>{info}</li>
            })}
        </ul>
      </BackProductCard>
    </ProductContainer>
  )
}
