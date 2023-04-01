import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding-top: 5.875rem;
`

export const HomeTextSection = styled.section`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  gap: 1rem;

  .principalText {
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['gray-800']};
  }

  .secondaryText {
    font-weight: 400;
    line-height: 130%;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const HomeTopics = styled.section`
  grid-area: 2 / 1 / 3 / 3;
  margin-top: 4rem;
`

export const HomeTopicItem = styled.section``

export const HomePrincipalImage = styled.img`
  grid-area: 1 / 3/ 3 / 5;
  margin-left: auto;
`
