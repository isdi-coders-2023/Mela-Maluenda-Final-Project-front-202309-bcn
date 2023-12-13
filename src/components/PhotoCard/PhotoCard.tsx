import usePhotosApi from "../../hooks/usePhotosApi";
import {
  deletePhotoActionsCreator,
  loadPhotosActionCreator,
  loadSelectPhotoActionsCreator,
} from "../../store/features/photosSlice";
import { useAppDispatch } from "../../store/hooks";
import { PhotosStructure } from "../../store/types";
import { hideLoadingActionsCreator } from "../../store/ui/uiSlice";
import Button from "../Button/Button";
import PhotoCardStyled from "./PhotoCardStyled";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface PhotosCardProps {
  photo: PhotosStructure;
}

const PhotoCard = ({
  photo: { title, author, year, location, category, photoUrl, _id },
}: PhotosCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deletePhoto, getPhotosApi, loadSelectPhoto } = usePhotosApi();
  const navigate = useNavigate();

  const deletePhotoById = async () => {
    try {
      const deletedPhotos = await deletePhoto(_id);
      dispatch(deletePhotoActionsCreator(_id));
      toast.success("Great! Photo successfully removed!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "toast toast-success",
      });

      if (deletedPhotos) {
        const photos = await getPhotosApi();
        dispatch(loadPhotosActionCreator(photos.photos));
      }
    } catch {
      toast.error("Oops! The photo cannot be deleted!", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "toast toast-error",
      });

      dispatch(hideLoadingActionsCreator());
    }
  };

  const modifyPhotos = async () => {
    const selectedPhotos = await loadSelectPhoto(_id);

    dispatch(loadSelectPhotoActionsCreator(selectedPhotos!));

    navigate(`/update/${_id}`);
  };

  return (
    <PhotoCardStyled className="card">
      <Link to={`/details/${_id}`}>
        <img
          className="card__image"
          src={photoUrl}
          alt={category}
          width="284"
          height="187"
        />
        <h3 className="card__title">{`« ${title} »`}</h3>
        <h4 className="card__title card__title--author">{`by ${author}`}</h4>
        <div className="card__icons">
          <img
            className="card__icon"
            src="/images/line.svg"
            alt=""
            width="200"
            height="2"
          />
          <img
            className="card__icon"
            src="/images/detailIcon.svg"
            alt=""
            width="27"
            height="27"
          />
        </div>
        <span className="card__subtitle">
          {location}, {year}
        </span>
        <span className="card__subtitle">{category}</span>
      </Link>
      <div className="card__button">
        <Button type="button" actionOnClick={modifyPhotos} text="Modify" />
        <Button type="submit" actionOnClick={deletePhotoById} text="Delete" />
      </div>
    </PhotoCardStyled>
  );
};

export default PhotoCard;
