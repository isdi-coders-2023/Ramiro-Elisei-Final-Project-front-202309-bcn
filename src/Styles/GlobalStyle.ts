import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.mainFont};
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.main};
  }

  h1,
  h2,
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  input, textarea, select {
    border: none;
    font-family: inherit;
    outline: none;
  }

  button {
    border: none;
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
