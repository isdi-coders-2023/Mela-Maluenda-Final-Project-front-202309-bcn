import styled from "styled-components";

const HomeStyled = styled.section`
  padding: 20px 20px 0 20px;

  .data {
    &__article {
      padding-bottom: 30px;
    }

    &__title {
      margin: 0 auto;
      padding: 10px;
      width: 220px;
      justify-content: center;
      border-bottom: solid 2px ${({ theme }) => theme.colors.accentLight};
      font-size: ${({ theme }) => theme.typography.mainSize};
    }

    &__text {
      padding: 15px 0;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      font-weight: 400;
      font-style: normal;
    }
  }
`;

export default HomeStyled;
