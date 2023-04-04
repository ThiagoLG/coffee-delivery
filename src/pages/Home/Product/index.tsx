import { IProduct } from '../../../models/IProduct'
import { ProductContainer } from './styles'

export function Product(product: IProduct) {
  return (
    <ProductContainer>
      <img src={product.imageUrl} alt="" />
      <span>{product.categories.join(', ')}</span>
      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <span>{product.availableAmount}</span>
    </ProductContainer>
  )
}
