import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import usePhotosApi from "../../hooks/usePhotosApi";
import { useEffect } from "react";
import { loadSelectPhotoActionsCreator } from "../../store/features/photosSlice";
import { PhotosStructure } from "../../store/types";
import DetailsPageStyled from "./DetailsPageStyled";

const DetailsPage = (): React.ReactElement => {
  const { photoId } = useParams();
  const dispatch = useAppDispatch();
  const { loadSelectPhoto } = usePhotosApi();
  const photo = useAppSelector((state) => state.photoState.selectedPhoto);

  useEffect(() => {
    (async () => {
      const selectedPhoto = await loadSelectPhoto(photoId as string);

      dispatch(loadSelectPhotoActionsCreator(selectedPhoto as PhotosStructure));
    })();
  }, [dispatch, photoId, loadSelectPhoto]);

  return (
    <DetailsPageStyled>
      <h1 className="details__title">Photo details</h1>
      <div className="details__container">
        <img
          className="details__image"
          src={photo.photoUrl}
          alt={photo.title}
          width="284"
          height="187"
        />
      </div>
      <article className="details__article">
        <h2 className="details__title details__title--accent">
          {`« ${photo.title} »`}
        </h2>
        <ul className="details__properties">
          <li className="details__property">{`Author: ${photo.author}`}</li>
          <li className="details__property">{`Year: ${photo.year}`}</li>
          <li className="details__property">{`Location: ${photo.location}`}</li>
          <li className="details__property">{`Public space: ${photo.publicSpace}`}</li>
          <li className="details__property">{`Category: ${photo.category}`}</li>
          <li className="details__property">{`Portfolio: ${photo.portfolioUrl}`}</li>
          <li className="details__property">What made you click:</li>
          <li className="details__property">
            <p className="details__description">{photo.whatMadeYouClick}</p>
          </li>
        </ul>
        <div className="details__button">
          <Button type="button" text="Modify" />
          <Button type="submit" text="Delete" />
        </div>
      </article>
    </DetailsPageStyled>
  );
};

export default DetailsPage;
