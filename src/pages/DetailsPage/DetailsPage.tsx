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
  const selectPhoto = useAppSelector((state) => state.photoState.selectedPhoto);

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const photo = await loadSelectPhoto(photoId as string);

      dispatch(loadSelectPhotoActionsCreator(photo as PhotosStructure));
    })();
  }, [dispatch, photoId, loadSelectPhoto]);

  return (
    <DetailsPageStyled>
      <h1 className="details__title">Photo details</h1>
      <div className="details__container">
        <img
          className="details__image"
          src={selectPhoto.photoUrl}
          alt={selectPhoto.title}
          width="284"
          height="187"
        />
      </div>
      <article className="details__article">
        <h2 className="details__title details__title--accent">
          {`« ${selectPhoto.title} »`}
        </h2>
        <ul className="details__properties">
          <li className="details__property">{`Author: ${selectPhoto.author}`}</li>
          <li className="details__property">{`Year: ${selectPhoto.year}`}</li>
          <li className="details__property">{`Location: ${selectPhoto.location}`}</li>
          <li className="details__property">{`Public space: ${selectPhoto.publicSpace}`}</li>
          <li className="details__property">{`Category: ${selectPhoto.category}`}</li>
          <li className="details__property">{`Portfolio: ${selectPhoto.portfolioUrl}`}</li>
          <li className="details__property">What made you click:</li>
          <li className="details__property">
            <p className="details__description">
              {selectPhoto.whatMadeYouClick}
            </p>
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
