import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

body,input,button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}`