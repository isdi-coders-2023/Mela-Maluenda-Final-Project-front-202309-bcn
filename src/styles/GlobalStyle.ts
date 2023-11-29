import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box;
} 

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
}

body, h1, h2, h3, p  {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
    font-size: 20px;
}

button,
input, 
textarea, 
select {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

h1, h2, h3, p {
  color: ${({ theme }) => theme.colors.mainText};
}

h2, h3, p {
  font-size: ${({ theme }) => theme.typography.regularFontFamily};
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
