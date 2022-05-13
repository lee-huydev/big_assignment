import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
   * {
       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }
   html {
    font-family: 'Dosis', sans-serif;
   }
   button, input {
    font-family: 'Dosis', sans-serif;
   }
   input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
     margin: 0;
}
`
export default GlobalStyle