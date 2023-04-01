import styled from 'styled-components'
interface BackdropProps {
  backdropColor: string
}
export const TopicContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};
`

export const TopicBackdrop = styled.div<BackdropProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.backdropColor};

  svg {
    fill: ${(props) => props.theme.background};
  }
`
