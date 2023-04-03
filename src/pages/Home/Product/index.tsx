import { ProductContainer } from './styles'

interface ProductProps {
  name: string
  description: string
  categories: string[]
  price: number
  availableAmount: number
  image: string
}
export function Product(product: ProductProps) {
  return (
    <ProductContainer>
      <img src={product.image} alt="" />
      <span>{product.categories.join(', ')}</span>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <span>{product.availableAmount}</span>
    </ProductContainer>
  )
}
