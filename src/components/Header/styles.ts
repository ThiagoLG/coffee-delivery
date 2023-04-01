import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const HeaderRegion = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
`

const BaseHeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
`

export const HeaderLocation = styled(BaseHeaderButton)`
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`

export const HeaderCart = styled(BaseHeaderButton)`
  background-color: ${(props) => props.theme['yellow-light']};
`
