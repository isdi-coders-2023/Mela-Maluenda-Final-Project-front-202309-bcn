import styled from "styled-components";

const NavigationStyled = styled.nav`
  .menu {
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__home,
    &__add {
      font-weight: 400;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-family: ${({ theme }) => theme.typography.regularSize};
      font-family: ${({ theme }) => theme.colors.backgroundDark};
    }
  }
`;

export default NavigationStyled;
