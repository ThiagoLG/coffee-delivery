import styled from 'styled-components'

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 0 1.5rem 1.25rem 1.5rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin: -1.25rem auto 0;
  }

  .tagsContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
  }

  .title {
    font-family: 'Baloo 2', 'sans-serif';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['gray-700']};
  }

  .description {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['gray-500']};
    margin-top: 0.5rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number']::-moz-up-button,
  input[type='number']::-moz-down-button {
    display: none;
  }
`
export const ProductTag = styled.span`
  color: ${(prop) => prop.theme['yellow-dark']};
  background-color: ${(prop) => prop.theme['yellow-light']};
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  text-transform: uppercase;
  border-radius: 100px;
`
export const ProductBuyContainer = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .priceContainer {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: ${(props) => props.theme['gray-600']};

    .pricePrefix {
      font-size: 0.875rem;
      font-weight: 400;
    }

    .priceValue {
      font-family: 'Baloo 2', 'sans-serirf';
      font-size: 1.5rem;
      font-weight: 800;
      margin-left: 0.25rem;
    }
  }

  .buyContainer {
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
    }
  }

  .cartButton {
    padding: 0.5rem;
    background-color: ${(props) => props.theme['purple-dark']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 6px;
    border: 0;
  }
`
