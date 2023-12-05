import usePhotosApi from "../../hooks/usePhotosApi";
import {
  deletePhotoActionsCreator,
  loadPhotosActionCreator,
} from "../../store/features/photosSlice";
import { useAppDispatch } from "../../store/hooks";
import { PhotosStructure } from "../../store/types";
import Button from "../Button/Button";
import PhotoCardStyled from "./PhotoCardStyled";

interface PhotosCardProps {
  photo: PhotosStructure;
}

const PhotoCard = ({
  photo: { title, author, year, location, category, photoUrl, _id },
}: PhotosCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePhoto, getPhotosApi } = usePhotosApi();

  const deletePhotoApi = async (id: string): Promise<void> => {
    await deletePhoto(id);
    dispatch(deletePhotoActionsCreator(id));

    const photos = await getPhotosApi();
    dispatch(loadPhotosActionCreator(photos.photos));
  };

  return (
    <PhotoCardStyled className="card">
      <img
        className="card__image"
        src={photoUrl}
        alt={`${category}`}
        width="284"
        height="187"
      />
      <h3 className="card__title">{`« ${title} »`}</h3>
      <h4 className="card__title card__title--author">{`by ${author}`}</h4>
      <div className="card__icons">
        <img
          className="card__icon"
          src="/images/line.svg"
          alt={`A yellow line`}
          width="200"
          height="2"
        />
        <img
          className="card__icon"
          src="/images/detailIcon.svg"
          alt={`A circular icon with a plus symbol inside`}
          width="27"
          height="27"
        />
      </div>
      <span className="card__subtitle">{`${location}, ${year}`}</span>
      <span className="card__subtitle">{`${category}`}</span>
      <div className="card__button">
        <Button type={"button"} text={"Modify"} />
        <Button
          type={"submit"}
          actionOnClick={() => {
            deletePhotoApi(_id);
          }}
          text={"Delete"}
        />
      </div>
    </PhotoCardStyled>
  );
};

export default PhotoCard;
