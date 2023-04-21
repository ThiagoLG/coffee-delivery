import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { PaymentModes } from '../../models/enums/PaymentModes.enum'
import { defaultTheme } from '../../styles/themes/default'
import { CheckoutCart } from './CheckoutCart'
import { CheckoutForm } from './CheckoutForm'
import {
  CheckoutContainer,
  FinishOrderButtonsContainer,
  FinishOrderSection,
  FinishOrderHeader,
  PaymentModeButton,
} from './styles'

export function Checkout() {
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<string>('')

  function handleSelectPaymentMode(paymentMode: string) {
    setSelectedPaymentMode(paymentMode)
  }

  return (
    <CheckoutContainer>
      <section className="finishOrderRegion">
        {/* Delivery Address Section */}
        <FinishOrderSection>
          <FinishOrderHeader>
            <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            <div className="title">
              <span>Endereço de Entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </FinishOrderHeader>
          <CheckoutForm />
        </FinishOrderSection>

        {/* Payments Sections */}
        <FinishOrderSection>
          <FinishOrderHeader>
            <CurrencyDollar size={22} color={defaultTheme.purple} />
            <div className="title">
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </FinishOrderHeader>

          <FinishOrderButtonsContainer>
            <PaymentModeButton
              className={
                selectedPaymentMode === PaymentModes.CartaoCredito
                  ? 'selected'
                  : ''
              }
              onClick={() =>
                handleSelectPaymentMode(PaymentModes.CartaoCredito)
              }
            >
              <CreditCard size={16} color={defaultTheme.purple} />
              <span>{PaymentModes.CartaoCredito}</span>
            </PaymentModeButton>
            <PaymentModeButton
              className={
                selectedPaymentMode === PaymentModes.CartaoDebito
                  ? 'selected'
                  : ''
              }
              onClick={() => handleSelectPaymentMode(PaymentModes.CartaoDebito)}
            >
              <Bank size={16} color={defaultTheme.purple} />
              <span>{PaymentModes.CartaoDebito}</span>
            </PaymentModeButton>
            <PaymentModeButton
              className={
                selectedPaymentMode === PaymentModes.Dinheiro ? 'selected' : ''
              }
              onClick={() => handleSelectPaymentMode(PaymentModes.Dinheiro)}
            >
              <Money size={16} color={defaultTheme.purple} />
              <span>{PaymentModes.Dinheiro}</span>
            </PaymentModeButton>
          </FinishOrderButtonsContainer>
        </FinishOrderSection>
      </section>

      <section className="cartRegion">
        <CheckoutCart></CheckoutCart>
      </section>
    </CheckoutContainer>
  )
}
