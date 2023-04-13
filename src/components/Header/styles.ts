import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.background};
  z-index: 10;

  .headerActions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    .baseButton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      height: 2.375rem;
      padding: 0.5rem;
      border-radius: 6px;

      &.location {
        font-size: 0.875rem;
        color: ${(props) => props.theme['purple-dark']};
        background-color: ${(props) => props.theme['purple-light']};
      }

      &.cart {
        background-color: ${(props) => props.theme['yellow-light']};
        position: relative;

        div {
          position: absolute;
          border: 0;
          background: ${(props) => props.theme['gray-800']};
          border-radius: 50%;
          width: 20px;
          height: 20px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 1px solid black;
          right: -25%;
          bottom: -10%;
          font-size: 12px;
        }
      }
    }
  }
`
