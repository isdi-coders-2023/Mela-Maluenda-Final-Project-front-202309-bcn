import Form from "../../components/Form/Form";
import usePhotosApi from "../../hooks/usePhotosApi";
import { PhotoStructureWithoutId, PhotosStructure } from "../../store/types";
import DetailsPageStyled from "../DetailsPage/DetailsPageStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import {
  loadSelectPhotoActionsCreator,
  modifyPhotoActionsCreator,
} from "../../store/features/photosSlice";
import { useEffect } from "react";

const UpdatePage = (): React.ReactElement => {
  const { modifyPhoto, loadSelectPhoto } = usePhotosApi();
  const { selectedPhoto } = useAppSelector((state) => state.photoState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();

  const updatePhoto = async (photo: PhotoStructureWithoutId) => {
    const updatedPhoto = await modifyPhoto(selectedPhoto._id, photo);

    dispatch(modifyPhotoActionsCreator(updatedPhoto!));
    navigate("/home");
  };

  useEffect(() => {
    (async () => {
      const selectedPhoto = await loadSelectPhoto(photoId as string);

      dispatch(loadSelectPhotoActionsCreator(selectedPhoto as PhotosStructure));
    })();
  }, [photoId, dispatch, loadSelectPhoto]);

  return (
    <DetailsPageStyled>
      <h1 className="details__title">Modify your photo</h1>
      <Form
        titleText="UPDATE"
        onSubmit={updatePhoto}
        buttonText="Modify"
        selectedPhoto={selectedPhoto}
      />
    </DetailsPageStyled>
  );
};

export default UpdatePage;
