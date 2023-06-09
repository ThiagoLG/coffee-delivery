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

  button[type='submit'] {
    background-color: ${(props) => props.theme.yellow};
    padding: 0.75rem 0.5rem;
    width: 100%;
    border-radius: 6px;

    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-stretch: 100;
  }
`

export const CartItemProduct = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;

  .cartItemProduct__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    gap: 1.25rem;
    flex: 1;

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

        > * {
          height: 2rem;
        }

        .cartItemProduct__delete {
          display: flex;
          gap: 0.25rem;
          align-items: center;
          background-color: ${(props) => props.theme['gray-300']};
          color: ${(props) => props.theme['gray-600']};
          border-radius: 6px;
          padding: 0.5rem;
          font-size: 0.75rem;
        }
      }
    }

    .cartItemProduct__prices {
      text-align: right;

      .cartItemProduct__currentPrice {
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-600']};
      }

      .cartItemProduct__originalPrice {
        font-size: 0.75rem;
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`

export const CartSummary = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .cartSummary__totalItems,
  .cartSummary__delivery,
  .cartSummary__discount {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }

  .cartSummary__totalOrder {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
