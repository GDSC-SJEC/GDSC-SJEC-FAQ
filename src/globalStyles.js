import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${(props) => props.theme.primaryBackground};
    transition: all ease-in-out 200ms;
  }

  #responsive-image {
    width: 100%;
  }
`;

export default GlobalStyle;