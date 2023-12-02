import { useAppSelector } from "../../store/hooks";
import PhotoCard from "../PhotoCard/PhotoCard";
import PhotosListStyled from "./PhotosListStyled";

const PhotosList = (): React.ReactElement => {
  const photos = useAppSelector((state) => state.photoState.photos);

  return (
    <PhotosListStyled>
      {photos.map((photo) => (
        <li key={photo._id}>
          <PhotoCard photo={photo} />
        </li>
      ))}
    </PhotosListStyled>
  );
};

export default PhotosList;
