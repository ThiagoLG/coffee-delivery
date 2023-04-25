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
import { useState } from 'react'
import { AddressItem } from '../../../models/interfaces/IAddressItem'

export function CheckoutForm() {
  const zipCodeRegexValidation = /^\d{5}-\d{3}$/

  // #region form controllers
  const deliveryValidationSchema = zod.object({
    zip: zod
      .string()
      .regex(zipCodeRegexValidation, 'Por favor, forneça um CEP válido'),
    address: zod.string().nonempty('Por favor, informe o endereço'),
    number: zod.coerce
      .number()
      .min(1, 'Por favor, informe o número da residência.'),
    complement: zod.string(),
    district: zod.string().nonempty('Por favor, informe o bairro'),
    city: zod.string().nonempty('Por favor, informe a cidade'),
    UF: zod
      .string()
      .nonempty('Por favor, informe a UF')
      .length(2, 'A UF deve ter 2 caracteres'),
  })

  type DeliveryInfosFormData = z.infer<typeof deliveryValidationSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = useForm<DeliveryInfosFormData>({
    resolver: zodResolver(deliveryValidationSchema),
  })
  // #endregion

  // #region states and hooks
  const [addressInfosResult, setAddressInfosResult] = useState<AddressItem>()
  // #endregion

  // #region form handlers
  function handleSubmitForm(data: DeliveryInfosFormData) {
    console.log(data)
  }

  async function handleZipCodeChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const zipCodeProvided = event.target.value
    const zipCodeNumbersOnly = zipCodeProvided.replace(/\D/gi, '')

    setValue('zip', zipCodeNumbersOnly.replace(/^(\d{5})(\d{1,3})+?$/, '$1-$2'))
    trigger('zip')

    if (zipCodeProvided.match(zipCodeRegexValidation))
      getAddressFromZipCode(zipCodeNumbersOnly)
    else clearAddressInfosToFields()
  }
  // #endregion

  // #region general functions
  async function getAddressFromZipCode(zip: string) {
    const url = `https://viacep.com.br/ws/${zip}/json/`

    const response = await fetch(url)
    const addressInfos: AddressItem = await response.json()

    setAddressInfosResult(addressInfos)

    setValue('address', addressInfos?.logradouro || '')
    setValue('district', addressInfos?.bairro || '')
    setValue('city', addressInfos?.localidade || '')
    setValue('UF', addressInfos?.uf || '')

    trigger(['address', 'district', 'city', 'UF'])
  }

  function clearAddressInfosToFields() {
    if (!addressInfosResult) return
    setValue('address', '')
    setValue('district', '')
    setValue('city', '')
    setValue('UF', '')
    trigger(['address', 'district', 'city', 'UF'])
  }
  // #endregion

  return (
    <CheckoutFormContainer
      id="delivery-form"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className="row">
        <FormGroup width={4}>
          <FormInput
            type="text"
            placeholder="CEP"
            {...register('zip')}
            hasError={!!errors.zip}
            onChange={handleZipCodeChange}
            maxLength={9}
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
            readOnly={!!addressInfosResult?.logradouro?.length}
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
            readOnly={!!addressInfosResult?.bairro?.length}
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
            readOnly={!!addressInfosResult?.localidade?.length}
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
            readOnly={!!addressInfosResult?.uf?.length}
            hasError={!!errors.UF}
          />
          {errors.UF && <FormFieldError>{errors.UF.message}</FormFieldError>}
        </FormGroup>
      </div>
    </CheckoutFormContainer>
  )
}
