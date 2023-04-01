import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-areas:
    'text image'
    'topics image';
  column-gap: 3rem;
  padding-top: 5.875rem;
`

export const HomeTextSection = styled.section`
  grid-area: text;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .principalText {
    font-family: 'Baloo 2', 'sans-serif';
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
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
  grid-area: topics;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: auto;
  padding: 1rem 0;
`

export const HomePrincipalImage = styled.img`
  grid-area: image;
  margin-left: auto;
`
