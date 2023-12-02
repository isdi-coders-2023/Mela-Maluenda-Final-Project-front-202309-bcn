import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 180px;
  height: 45px;
  color: ${({ theme }) => theme.colors.lighter};
  background-color: ${({ theme }) => theme.colors.accentDark};
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  font-size: ${({ theme }) => theme.typography.regularSize};
  font-weight: 400;
  border-radius: 15px;
`;

export default ButtonStyled;
