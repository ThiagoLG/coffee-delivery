import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.background};
  -webkit-font-smoothing: antialiased;
}

body,input,button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button {
  cursor: pointer;
  border: 0;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
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
