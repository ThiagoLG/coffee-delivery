import {
  HomeContainer,
  HomeInfosSection,
  HomePrincipalImage,
  HomeTextSection,
  HomeTopics,
  ProductsCatalog,
} from './styles'
import HomeYellowCoffee from '../../assets/home_yellow_coffee.svg'
import { TopicBackdrop, TopicContainer } from '../../components/Topics/styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { Product } from './Product'
import axios from 'axios'
import { IProduct } from '../../models/IProductItem'
import { useEffect, useState } from 'react'

export function Home() {
  const [products, setProducts] = useState<IProduct[]>([])

  const getProducts = async () => {
    const productsData = await axios.get('/data/products.json')
    setProducts(productsData?.data?.data || [])
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <HomeContainer>
      <HomeInfosSection>
        <HomeTextSection>
          <span className="principalText">
            Encontre o café perfeito para qualquer hora do dia
          </span>
          <span className="secondaryText">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </HomeTextSection>

        <HomeTopics>
          <TopicContainer>
            <TopicBackdrop backdropColor={defaultTheme['yellow-dark']}>
              <ShoppingCart size={16} weight="fill" />
            </TopicBackdrop>
            <span>Compra simples e segura</span>
          </TopicContainer>

          <TopicContainer>
            <TopicBackdrop backdropColor={defaultTheme['gray-600']}>
              <Package size={16} weight="fill" />
            </TopicBackdrop>
            <span>Embalagem mantém o café intacto</span>
          </TopicContainer>

          <TopicContainer>
            <TopicBackdrop backdropColor={defaultTheme.yellow}>
              <Timer size={16} weight="fill" />
            </TopicBackdrop>
            <span>Entrega rápida e rastreada</span>
          </TopicContainer>

          <TopicContainer>
            <TopicBackdrop backdropColor={defaultTheme.purple}>
              <Coffee size={16} weight="fill" />
            </TopicBackdrop>
            <span>O café chega fresquinho até você</span>
          </TopicContainer>
        </HomeTopics>

        <HomePrincipalImage src={HomeYellowCoffee} />
      </HomeInfosSection>

      <span className="titleText">Nossos Cafés</span>

      <ProductsCatalog>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsCatalog>
    </HomeContainer>
  )
}
