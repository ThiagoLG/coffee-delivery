import styled from 'styled-components'

interface FormProps {
  width?: number
  hasError?: boolean
}

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }
`

export const FormInput = styled.input<FormProps>`
  padding: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['gray-500']};
  background-color: ${(props) => props.theme['gray-200']};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  width: 100%;
  height: 2.625rem;
  outline: ${(props) =>
    props.hasError ? '1px solid' + props.theme.error : 'none'};
`

export const FormGroup = styled.div<FormProps>`
  width: ${(props) =>
    !props.width
      ? '100%'
      : (props.width > 12 || props.width < 1 ? 12 : props.width) / 0.12}%;
`

export const FormFieldError = styled.span`
  font-size: 0.75rem;
  padding: 0.375rem;
  color: ${(props) => props.theme.error};
`
