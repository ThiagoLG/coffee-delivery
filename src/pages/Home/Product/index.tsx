import { ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { IProduct } from '../../../models/IProduct'
import { ProductBuyContainer, ProductContainer, ProductTag } from './styles'

export function Product(product: IProduct) {
  const [amountToBuy, setAmountToBuy] = useState<number>(1)

  function formatCurrency(price: number) {
    if (!price || price <= 0) return 'R$ 0,00'
    return (price / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

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
          <button>-</button>
          <input type="number" value={amountToBuy} />
          <button>+</button>
        </section>
        <button className="cartButton">
          <ShoppingCartSimple size={22} color="white" weight="fill" />
        </button>
      </ProductBuyContainer>
    </ProductContainer>
  )
}
