import styled from "styled-components";

const NavigationStyled = styled.nav`
  .menu {
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__home,
    &__add {
      margin-bottom: 5px;
      font-weight: 400;
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.regularSize};
      color: ${({ theme }) => theme.colors.backgroundDark};
    }
  }

  .active {
    font-weight: 900;
    text-decoration-line: underline;
  }
`;

export default NavigationStyled;
