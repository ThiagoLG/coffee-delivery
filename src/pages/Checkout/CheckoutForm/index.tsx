/* eslint-disable no-undef */
import { CheckoutFormContainer, FormInput } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

interface IDeliveryInfos {
  zip: string
  address: string
  number: string
  complement: string
  district: string
  city: string
  UF: string
}

const deliveryValidationSchema = zod.object({
  zip: zod.string().regex(/^\d{5}-\d{3}$/, 'Por favor, forneça um CEP válido'),
  address: zod.string().min(1, 'Por favor, informe o endereço'),
  number: zod.number().min(1, 'Por favor, informe o número da residência.'),
  complement: zod.string(),
  district: zod.string().min(1, 'Por favor, informe o bairro'),
  city: zod.string().min(1, 'Por favor, informe a cidade'),
  UF: zod.string().min(1, 'Por favor, informe a UF'),
})

export function CheckoutForm() {
  const { register, handleSubmit, setValue } = useForm()

  function handleSubmitForm(data: IDeliveryInfos) {
    console.log(data)
  }

  function getCEPInfos() {
    const cep = register.zip // substitua pelo CEP desejado
    const url = `https://viacep.com.br/ws/${cep}/json/`
  }

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="row">
        <FormInput
          inputSize={4}
          type="text"
          placeholder="CEP"
          {...register('zip')}
        />
      </div>

      <div className="row">
        <FormInput
          inputSize={12}
          type="text"
          placeholder="Rua"
          {...register('address')}
        />
      </div>

      <div className="row">
        <FormInput
          inputSize={4}
          type="number"
          placeholder="Número"
          {...register('number')}
        />
        <FormInput
          inputSize={8}
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </div>

      <div className="row">
        <FormInput
          inputSize={5}
          type="text"
          placeholder="Bairro"
          {...register('district')}
        />
        <FormInput
          inputSize={6}
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />
        <FormInput
          inputSize={1}
          type="text"
          placeholder="UF"
          {...register('UF')}
        />
      </div>
      <button type="submit">Submit</button>
    </CheckoutFormContainer>
  )
}
