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
      margin: 0 auto;
      padding: 10px;
      width: 230px;
      justify-content: center;
      border-bottom: solid 2px ${({ theme }) => theme.colors.accentLight};
      font-size: ${({ theme }) => theme.typography.mainSize};
    }

    &__text {
      width: 350px;
      padding: 15px 0 0 0;
      font-family: ${({ theme }) => theme.typography.regularFontFamily};
      font-size: ${({ theme }) => theme.typography.secondaryTitleSize};
      font-weight: 400;
      font-style: normal;
    }
  }
`;

export default HomeStyled;
