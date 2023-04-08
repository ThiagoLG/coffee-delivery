import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 5rem;

  .titleText {
    font-family: 'Baloo 2', 'sans-serif';
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-700']};
  }
`

export const HomeInfosSection = styled.section`
  display: grid;
  grid-template-areas:
    'text image'
    'topics image'
    'catalog catalog';
  column-gap: 3rem;
  padding: 5.75rem 0;
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
export const ProductsCatalog = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  grid-area: catalog;
`
