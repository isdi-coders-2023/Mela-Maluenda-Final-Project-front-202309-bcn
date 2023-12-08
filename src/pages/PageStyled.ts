import styled from "styled-components";

const PageStyled = styled.div`
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

      &--detail {
        border-bottom: solid 2px ${({ theme }) => theme.colors.accentDark};
      }
    }

    &__text {
      width: 250px;
      padding: 15px 0 10px 0;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      font-weight: 400;
      font-style: normal;

      &--rules {
        padding: 10px 0;
      }

      &--detail {
        padding: 10px 0;
        list-style-type: decimal;
      }
    }

    &__unordered {
      display: flex;
      flex-direction: column;
      width: 230px;
    }

    &__ordered {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 250px;
    }

    &__detail {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      background-color: ${({ theme }) => theme.colors.accentLight};
    }
  }

  @media (min-width: 430px) {
    .data {
      &__text {
        width: 350px;
      }

      &__ordered {
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

      &__ordered {
        width: 600px;
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

      &__ordered {
        width: 900px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }
`;

export default PageStyled;
