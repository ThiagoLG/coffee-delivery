import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: '6fr 4fr';
`
export const FinishOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`
export const FinishOrderHeader = styled.section`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;

  .header {
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
  }
`
export const FinishOrderButtonsContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  justify-content: center;
`
