import {
  HomeContainer,
  HomePrincipalImage,
  HomeTextSection,
  HomeTopicItem,
  HomeTopics,
} from './styles'
import HomeYellowCoffee from '../../assets/home_yellow_coffee.svg'

export function Home() {
  return (
    <HomeContainer>
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
        <HomeTopicItem>Compre simples e seguro</HomeTopicItem>
        <HomeTopicItem>Entrega rápida e rastreada</HomeTopicItem>
        <HomeTopicItem>O café chega fresquinho até você</HomeTopicItem>
        <HomeTopicItem>Embalagem mantém o café intacto</HomeTopicItem>
      </HomeTopics>
      <HomePrincipalImage src={HomeYellowCoffee} />
    </HomeContainer>
  )
}
