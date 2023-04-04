import styled from 'styled-components'

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${({ theme }) => theme['gray-100']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin: -1.25rem auto 0;
  }

  .title {
  }
`
export const ProductTag = styled.span`
  color: ${(prop) => prop.theme['yellow-dark']};
  background-color: ${(prop) => prop.theme['yellow-light']};
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
`
