import { IProduct } from '../../../models/IProduct'
import { ProductContainer } from './styles'

export function Product(product: IProduct) {
  return (
    <ProductContainer>
      <img src={product.imageUrl} alt="Product image" />
      <span>{product.categories.join(', ')}</span>

      {product.categories?.map((productCategory) => {
        return <span key={productCategory}>{productCategory}</span>
      })}

      <span>{product.name}</span>
      <span>{product.description}</span>
      <span>{product.price}</span>
      <span>{product.availableAmount}</span>
    </ProductContainer>
  )
}
