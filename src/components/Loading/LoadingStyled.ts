import styled from "styled-components";

const LoadingStyled = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDarkOpacity};
  z-index: 2;

  .loading {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.mainSize};
    width: 140px;
    height: 36px;
    color: ${({ theme }) => theme.colors.accentLight};
    font-weight: 900;
    text-align: center;
    margin-top: 160px;
  }

  .loader {
    width: 200px;
    height: 48px;
    display: inline-block;
    position: relative;
  }

  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 192px;
    height: 192px;
    border-radius: 50%;
    border: 15px solid ${({ theme }) => theme.colors.accentLight};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default LoadingStyled;
