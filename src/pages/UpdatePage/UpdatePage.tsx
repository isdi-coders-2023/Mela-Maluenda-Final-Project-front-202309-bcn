import Form from "../../components/Form/Form";
import usePhotosApi from "../../hooks/usePhotosApi";
import { PhotoStructureWithoutId } from "../../store/types";
import DetailsPageStyled from "../DetailsPage/DetailsPageStyled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { modifyPhotoActionsCreator } from "../../store/features/photosSlice";

const UpdatePage = (): React.ReactElement => {
  const { modifyPhoto } = usePhotosApi();
  const { selectedPhoto } = useAppSelector((state) => state.photoState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();

  const updatePhoto = async (photo: PhotoStructureWithoutId) => {
    const updatedPhoto = await modifyPhoto(photoId!, photo);

    dispatch(modifyPhotoActionsCreator(updatedPhoto!));
    navigate("/home");
  };
  return (
    <DetailsPageStyled>
      <h1 className="details__title">Modify your photo</h1>
      <Form
        onSubmit={updatePhoto}
        buttonText="Modify"
        selectedPhoto={selectedPhoto}
      />
    </DetailsPageStyled>
  );
};

export default UpdatePage;
