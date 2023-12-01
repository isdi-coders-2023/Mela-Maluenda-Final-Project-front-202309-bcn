import { useAppSelector } from "../../store/hooks";
import PhotosListStyled from "./PhotosListStyled";

const PhotosList = (): React.ReactElement => {
  const photos = useAppSelector((state) => state.photoState.photos);

  return (
    <PhotosListStyled>
      {photos.map((photo) => (
        <li key={photo.id}>
          <h2>{photo.title}</h2>
        </li>
      ))}
    </PhotosListStyled>
  );
};

export default PhotosList;
