import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box;
} 

html {
  font-family: ${({ theme }) => theme.typography.mainFontFamily}
}

body, h1, h2, h3, h4, p  {
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
input {
  font-family: inherit;
  text-align: center;
  padding: 10px;
  border:none;
  border-radius: 5px;
}

h1, h2, h3, h4, p {
  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.typography.regularFontFamily};
}

img {
  max-width: 100%;
}

button {
  cursor: pointer;
}


.toast {
  margin-bottom: 750px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.typography.regularFontFamily};
  font-size: ${({ theme }) => theme.typography.regularSize};
  border: solid 10px ${({ theme }) => theme.colors.accentLight};
  
  &-success {
    background-color: ${({ theme }) => theme.colors.accentDark};
  }

  &-error {
    background-color: ${({ theme }) => theme.colors.error};
  }
}
`;

export default GlobalStyle;
