import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import {
  CheckoutContainer,
  FinishOrderContainer,
  FinishOrderHeader,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FinishOrderContainer>
        <FinishOrderHeader>
          <section className="header">
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <div className="title">
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </section>
        </FinishOrderHeader>
      </FinishOrderContainer>

      <FinishOrderContainer>
        <FinishOrderHeader>
          <section className="header">
            <CurrencyDollar size={22} color={defaultTheme.purple} />
            <div className="title">
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </section>
        </FinishOrderHeader>
      </FinishOrderContainer>
    </CheckoutContainer>
  )
}
