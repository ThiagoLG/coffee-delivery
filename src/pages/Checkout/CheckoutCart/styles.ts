import styled from 'styled-components'

export const CheckoutCartContainer = styled.section`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 6px 44px;

  .cartProductContainer {
    display: flex;
    flex-direction: column;
    max-height: 545px;
    overflow: auto;
    gap: 1.5rem;

    hr {
      border-color: ${(props) => props.theme['gray-300']};
      opacity: 0.2;
    }
  }
`

export const CartItemProduct = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0.25rem;

  .cartItemProduct__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 1.25rem;

    .cartItemProduct__image {
      width: 4rem;
      height: 4rem;
    }

    .cartItemProduct__details {
      display: flex;
      flex-direction: column;
      padding: 0;
      gap: 0.5rem;

      .cartItemProduct__name {
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme['gray-700']};
      }

      .cartItemProduct__actions {
        display: flex;
        gap: 0.5rem;

        .cartItemProduct__delete {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          background-color: ${(props) => props.theme['gray-300']};
          border-radius: 6px;
          padding: 0.5rem;
        }
      }

      .cartItemProduct__prices {
        .cartItemProduct__currentPrice {
          font-weight: 700;
          font-size: 1rem;
          color: ${(props) => props.theme['gray-600']};
        }
      }
    }
  }
`
