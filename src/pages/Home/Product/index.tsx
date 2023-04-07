import { ShoppingCartSimple } from 'phosphor-react'
import { ChangeEvent, useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { ICartItem } from '../../../models/ICartItem'
import { IProduct } from '../../../models/IProduct'
import { ProductBuyContainer, ProductContainer, ProductTag } from './styles'

export function Product(product: IProduct) {
  const [amountToBuy, setAmountToBuy] = useState<number>(1)
  const { cartItems, addProductsToCart } = useContext(CartContext)

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

  function handleAddToCart() {
    const cartItem: ICartItem = {
      product,
      amount: amountToBuy,
      totalPrice: (amountToBuy * product.price) / 100,
    }
    addProductsToCart(cartItem)
  }

  // console.log('itens do carrinho', cartItems)

  return (
    <ProductContainer>
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

      <ProductBuyContainer>
        <section className="priceContainer">
          <span className="pricePrefix">R$</span>
          <span className="priceValue">{formatCurrency(product.price)}</span>
        </section>
        <section className="buyContainer">
          <button onClick={decreaseAmount}>--</button>
          <input
            type="number"
            value={amountToBuy}
            onChange={handleChangeProductAmount}
            required
          />
          <button onClick={increaseAmount}>+</button>
        </section>
        <button className="cartButton" onClick={handleAddToCart}>
          <ShoppingCartSimple size={22} color="white" weight="fill" />
        </button>
      </ProductBuyContainer>
    </ProductContainer>
  )
}
