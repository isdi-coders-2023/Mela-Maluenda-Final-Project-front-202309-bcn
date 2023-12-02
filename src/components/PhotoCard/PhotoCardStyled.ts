import styled from "styled-components";

const PhotoCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 480px;
  border: 2px solid ${({ theme }) => theme.colors.lighter};
  border-radius: 0 0 11px 11px;
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.backgroundLight};

  .card {
    &__title {
      padding: 10px 30px 5px 30px;
      justify-content: center;
      font-family: ${({ theme }) => theme.typography.mainFontFamily};
      font-size: ${({ theme }) => theme.typography.titleSize};
    }

    &__icons {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__subtitle {
      padding: 3px;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      color: ${({ theme }) => theme.colors.mainText};
    }

    &__button {
      padding: 10px 56px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
`;

export default PhotoCardStyled;
