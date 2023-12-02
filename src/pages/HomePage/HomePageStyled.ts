import styled from "styled-components";

const HomeStyled = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .data {
    &__article {
      padding-bottom: 30px;
    }

    &__title {
      text-align: center;
      margin: 0 auto;
      padding: 10px;
      width: 230px;
      justify-content: center;
      border-bottom: solid 2px ${({ theme }) => theme.colors.accentLight};
      font-size: ${({ theme }) => theme.typography.mainSize};
    }

    &__text {
      width: 250px;
      padding: 15px 0 10px 0;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      font-weight: 400;
      font-style: normal;
    }
  }

  @media (min-width: 430px) {
    .data {
      &__text {
        width: 350px;
      }
    }
  }

  @media (min-width: 650px) {
    .data {
      &__title {
        margin: 0 auto;
        width: 300px;
        font-size: ${({ theme }) => theme.typography.titleSuperSize};
      }

      &__text {
        width: 550px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }

  @media (min-width: 985px) {
    .data {
      &__title {
        margin: 0 auto;
        width: 350px;
        font-size: ${({ theme }) => theme.typography.titleSuperSize};
      }

      &__text {
        width: 850px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }
`;

export default HomeStyled;
