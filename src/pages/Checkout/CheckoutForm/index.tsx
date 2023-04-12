import { CheckoutFormContainer, FormInput } from './styles'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <div className="formRow">
        <FormInput inputSize={4} type="text" placeholder="CEP" />
      </div>

      <div className="formRow">
        <FormInput inputSize={12} type="text" placeholder="Rua" />
      </div>
      <div className="formRow">
        <FormInput inputSize={4} type="number" placeholder="Número" />
        <FormInput inputSize={8} type="text" placeholder="Complemento" />
      </div>

      <div className="formRow">
        <FormInput inputSize={5} type="text" placeholder="Bairro" />
        <FormInput inputSize={6} type="text" placeholder="Cidade" />
        <FormInput inputSize={1} type="text" placeholder="UF" />
      </div>
    </CheckoutFormContainer>
  )
}
