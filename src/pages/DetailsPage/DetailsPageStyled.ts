import styled from "styled-components";

const DetailsPageStyled = styled.div`
  .details {
    &__title {
      margin: 0 auto;
      width: 300px;
      font-weight: 400;
      padding: 30px 0 10px 0;
      text-align: center;
      border-bottom: solid 2px ${({ theme }) => theme.colors.accentLight};
      font-size: ${({ theme }) => theme.typography.mainSize};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};

      &--accent {
        padding: 15px;
        border-bottom: solid 2px ${({ theme }) => theme.colors.light};
      }
    }

    &__container {
      display: flex;
      padding: 20px 0 25px 0;
      justify-content: center;
    }

    &__image {
      width: 320px;
      height: 226.248px;
      object-fit: contain;
    }

    &__article {
      padding: 10px 0 20px 0;
      margin: 0 auto;
      width: 300px;
      border-radius: 14px 14px 15px 13px;
      background-color: ${({ theme }) => theme.colors.backgroundLightOpacity};
      overflow-wrap: anywhere;
    }

    &__properties {
      padding: 10px 25px;
      gap: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    }

    &__description {
      padding: 15px;
      width: 250px;
      margin-bottom: 20px;
      border-radius: 14px;
      background-color: ${({ theme }) => theme.colors.lighter};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
    }

    &__button {
      padding-top: 20px;
      height: 45px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
  }

  @media (min-width: 650px) {
    .details {
      &__title,
      &--accent {
        font-size: ${({ theme }) => theme.typography.superMainSize};
      }

      &__image {
        width: 380px;
        height: 250px;
      }

      &__article {
        width: 500px;
      }

      &__properties {
        font-size: ${({ theme }) => theme.typography.titleSize};
      }

      &__description {
        width: 450px;
      }

      &__button {
        justify-content: center;
        gap: 40px;
      }
    }
  }

  @media (min-width: 985px) {
    .details {
      &__title,
      &--accent {
        font-size: ${({ theme }) => theme.typography.superMainSize};
      }

      &__image {
        width: 380px;
        height: 250px;
      }

      &__article {
        width: 800px;
      }

      &__description {
        width: 700px;
      }

      &__properties {
        padding: 10px 50px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }

      &__button {
        justify-content: center;
        gap: 80px;
      }
    }
  }
`;

export default DetailsPageStyled;
