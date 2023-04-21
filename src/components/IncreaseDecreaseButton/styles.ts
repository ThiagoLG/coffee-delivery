import styled from 'styled-components'

export const IncreaseDecreaseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 6px;
  padding: 0.53rem 0.75rem;
  width: 4.5rem;

  font-family: monospace;

  input {
    font-size: 1rem;
    text-align: center;
    color: ${(props) => props.theme['gray-800']};
    width: 1.25rem;
    background-color: transparent;
    border: 0;
    outline: 0;
  }
  button {
    color: ${(props) => props.theme.purple};
    border: 0;
    background-color: transparent;
    font-size: 1.125rem;
    width: 0.75rem;
    letter-spacing: -1px;
  }
`
