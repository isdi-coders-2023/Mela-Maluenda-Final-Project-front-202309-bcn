import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  gap: 10px;
  border-radius: 0 0 7px 7px;

  .form {
    &__title {
      width: 250px;
      padding: 20px;
      margin: 0 auto;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.accentLight};
      font-size: ${({ theme }) => theme.typography.superMainSize};
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      border-bottom: solid 2px ${({ theme }) => theme.colors.light};
    }

    &__label {
      width: 220px;
      padding: 10px 5px 0 30px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.light};
      font-size: ${({ theme }) => theme.typography.titleSize};
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
    }

    &__input {
      width: 238px;
      padding: 15px;
      text-align: start;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.input};
      border-radius: 7px;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.regularSize};
      color: ${({ theme }) => theme.colors.mainText};
    }

    &__description {
      margin: 0 auto;
      padding: 20px 10px;
      width: 238px;
      height: 250px;
      padding: 15px;
      border-radius: 14px;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.regularSize};
      background-color: ${({ theme }) => theme.colors.input};

      textarea::placeholder {
        color: ${({ theme }) => theme.colors.mainText};
      }
    }

    &__button {
      width: 280px;
      padding: 20px;
      margin: 0 auto;
      text-align: center;
    }

    &__category {
      display: flex;
      flex-direction: column;
    }
  }

  .button {
    &__form {
      color: ${({ theme }) => theme.colors.accentDark};
      background-color: ${({ theme }) => theme.colors.accentLight};
      text-transform: uppercase;
      font-weight: 500;
    }

    &:disabled {
      color: ${({ theme }) => theme.colors.light};
      background-color: ${({ theme }) => theme.colors.backgroundLight};
      button.sc-gsTDqH.cwdUJo.butto.button__form {
        visibility: hidden;
      }
      button.sc-gsTDqH.cwdUJo.butto.button__form:before {
        visibility: visible;
        content: "save chanches";
        color: ${({ theme }) => theme.colors.light};
        background-color: ${({ theme }) => theme.colors.backgroundLight};
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: 520px) {
    width: 400px;

    .form {
      &__input {
        width: 339px;
      }

      &__description {
        width: 339px;
      }
    }
  }

  @media (min-width: 650px) {
    width: 550px;

    .form {
      &__label {
        padding: 10px 5px 0 40px;
      }

      &__input {
        width: 470px;
      }

      &__description {
        width: 450px;
      }

      &__button {
        padding: 30px;
      }
    }

    .button {
      &__form {
        width: 250px;
        height: 65px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }

  @media (min-width: 985px) {
    width: 900px;

    .form {
      &__label {
        padding: 15px 5px 5px 60px;
        width: 600px;
      }

      &__input {
        width: 800px;
      }

      &__description {
        width: 800px;
      }

      &__button {
        padding: 30px;
      }
    }

    .button {
      &__form {
        width: 300px;
        height: 65px;
        font-size: ${({ theme }) => theme.typography.titleSize};
      }
    }
  }
`;

export default FormStyled;
