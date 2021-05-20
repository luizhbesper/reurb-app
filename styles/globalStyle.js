import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }
`;

export default GlobalStyle;
