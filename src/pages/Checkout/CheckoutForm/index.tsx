/* eslint-disable no-undef */
import {
  CheckoutFormContainer,
  FormFieldError,
  FormGroup,
  FormInput,
} from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const deliveryValidationSchema = zod.object({
  zip: zod.string().regex(/^\d{5}-\d{3}$/, 'Por favor, forneça um CEP válido'),
  address: zod.string().nonempty('Por favor, informe o endereço'),
  number: zod.number().min(1, 'Por favor, informe o número da residência.'),
  complement: zod.string(),
  district: zod.string().nonempty('Por favor, informe o bairro'),
  city: zod.string().nonempty('Por favor, informe a cidade'),
  UF: zod
    .string()
    .nonempty('Por favor, informe a UF')
    .length(2, 'A UF deve ter 2 caracteres'),
})

type DeliveryInfosFormData = z.infer<typeof deliveryValidationSchema>

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryInfosFormData>({
    resolver: zodResolver(deliveryValidationSchema),
  })

  function handleSubmitForm(data: DeliveryInfosFormData) {
    console.log(data)
  }

  function getCEPInfos(event: any) {
    console.log('rodou')
    console.log(event.target.value)

    const cep = event // substitua pelo CEP desejado
    console.log(event)
    const url = `https://viacep.com.br/ws/${cep}/json/`
  }

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="row">
        <FormGroup width={4}>
          <FormInput
            type="text"
            placeholder="CEP"
            {...register('zip')}
            hasError={!!errors.zip}
          />
          {errors.zip && <FormFieldError>{errors.zip.message}</FormFieldError>}
        </FormGroup>
      </div>

      <div className="row">
        <FormGroup width={12}>
          <FormInput
            type="text"
            placeholder="Rua"
            {...register('address')}
            hasError={!!errors.address}
          />
          {errors.address && (
            <FormFieldError>{errors.address.message}</FormFieldError>
          )}
        </FormGroup>
      </div>

      <div className="row">
        <FormGroup width={4}>
          <FormInput
            type="number"
            placeholder="Número"
            {...register('number')}
            hasError={!!errors.number}
          />
          {errors.number && (
            <FormFieldError>{errors.number.message}</FormFieldError>
          )}
        </FormGroup>

        <FormGroup width={8}>
          <FormInput
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            hasError={!!errors.complement}
          />
          {errors.complement && (
            <FormFieldError>{errors.complement.message}</FormFieldError>
          )}
        </FormGroup>
      </div>

      <div className="row">
        <FormGroup width={5}>
          <FormInput
            type="text"
            placeholder="Bairro"
            {...register('district')}
            hasError={!!errors.district}
          />
          {errors.district && (
            <FormFieldError>{errors.district.message}</FormFieldError>
          )}
        </FormGroup>

        <FormGroup width={6}>
          <FormInput
            type="text"
            placeholder="Cidade"
            {...register('city')}
            hasError={!!errors.city}
          />
          {errors.city && (
            <FormFieldError>{errors.city.message}</FormFieldError>
          )}
        </FormGroup>

        <FormGroup width={1}>
          <FormInput
            type="text"
            placeholder="UF"
            {...register('UF')}
            hasError={!!errors.UF}
          />
          {errors.UF && <FormFieldError>{errors.UF.message}</FormFieldError>}
        </FormGroup>
      </div>
      <button type="submit">Submit</button>
    </CheckoutFormContainer>
  )
}
