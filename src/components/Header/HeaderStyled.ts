import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-top: 50px;

  .head {
    &__banner {
      background-image: url("./images/banner600.webp");
      width: 100vw;
      height: 140px;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    &__logo {
      position: absolute;
      top: 25px;
      right: 0;
      left: 0;
      margin: auto;
      z-index: 1;
    }
  }

  @media (min-width: 430px) {
    .head {
      &__banner {
        background-image: url("./images/banner800.webp");
        height: 160px;
      }
    }
  }

  @media (min-width: 985px) {
    padding-top: 70px;
    .head {
      &__banner {
        background-image: url("./images/banner800.webp");
        height: 280px;
      }

      &__logo {
        width: 130px;
        height: 100px;
      }
    }
  }
`;

export default HeaderStyled;
