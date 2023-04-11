import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: '6fr 4fr';
  gap: 0.75rem;

  .finishOrderInfos {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
  }
`
export const FinishOrderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const FinishOrderHeader = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span:nth-child(1) {
      color: ${(props) => props.theme['gray-700']};
      font-size: 1rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-600']};
      line-height: 130%;
    }
  }
`
export const FinishOrderButtonsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
`
export const PaymentModeButton = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-300']};
  cursor: pointer;

  span {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-600']};
  }

  &:hover {
    background: ${(props) => props.theme['gray-400']};
  }
  &.selected {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
