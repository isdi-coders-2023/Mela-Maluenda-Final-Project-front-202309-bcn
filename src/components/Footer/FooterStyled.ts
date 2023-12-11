import styled from "styled-components";

const FooterStyled = styled.div`
  padding-top: 15px;
  height: 50px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};

  .footer {
    &__data {
      width: 100%;
      padding: 20px 10px 0px 25px;
      font-size: ${({ theme }) => theme.typography.regularSize};
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      color: ${({ theme }) => theme.colors.light};
    }
  }
`;

export default FooterStyled;
