import styled from 'styled-components'

interface FormProps {
  inputSize: number
}

export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input {
  }

  .formRow {
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
  width: ${(props) =>
    (props.inputSize > 12 || props.inputSize < 1 ? 12 : props.inputSize) /
    0.12}%;
`
