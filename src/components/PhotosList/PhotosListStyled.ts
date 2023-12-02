import styled from "styled-components";

const PhotosListStyled = styled.ul`
  padding: 20px 25px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 40px;
  justify-items: center;
  justify-content: space-around;

  @media (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 985px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default PhotosListStyled;
