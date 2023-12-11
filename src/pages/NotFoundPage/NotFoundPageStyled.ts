import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 7px ${({ theme }) => theme.colors.accentLight};

  .not {
    &__title {
      width: 300px;
      padding: 10px 20px;
      color: ${({ theme }) => theme.colors.error};
      text-align: center;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.superSize};
      font-weight: 500;
      text-transform: uppercase;
    }

    &__image {
      width: 245px;
      height: 162px;
      object-fit: contain;
    }

    &__message {
      padding: 15px 20px;
      color: ${({ theme }) => theme.colors.backgroundDark};
      text-align: center;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      font-weight: 400;
    }

    &__button {
      width: 180px;
      height: 45px;
      color: ${({ theme }) => theme.colors.lighter};
      background-color: ${({ theme }) => theme.colors.accentDark};
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.regularSize};
      font-weight: 400;
      border-radius: 15px;

      &--home {
        text-align: center;
        padding: 10px 30px;
        width: 160px;
        background-color: ${({ theme }) => theme.colors.error};
        text-transform: uppercase;
        font-family: ${({ theme }) => theme.typography.mainFontFamily};
        font-size: ${({ theme }) => theme.typography.regularSize};
        margin-bottom: 15px;
      }
    }
  }
`;

export default NotFoundPageStyled;
