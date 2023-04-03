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
