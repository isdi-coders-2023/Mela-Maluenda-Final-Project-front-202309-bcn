import axios from "axios";
import { useCallback } from "react";
import { PhotoStructureWithoutId, PhotosStructure } from "../store/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionsCreator,
  showLoadingActionsCreator,
} from "../store/ui/uiSlice";
import { addPhotoActionsCreator } from "../store/features/photosSlice";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const usePhotosApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const getPhotosApi = useCallback(async () => {
    dispatch(showLoadingActionsCreator());

    const { data: photos } = await axios.get<{
      photos: PhotosStructure[];
    }>("/photos");

    dispatch(hideLoadingActionsCreator());
    return photos;
  }, [dispatch]);

  const deletePhoto = useCallback(
    async (id: string): Promise<Record<string, never> | void> => {
      dispatch(showLoadingActionsCreator());

      const { data } = await axios.delete(`/photos/${id}`);

      dispatch(hideLoadingActionsCreator());

      return data;
    },
    [dispatch],
  );

  const addPhoto = useCallback(
    async (
      newPhoto: PhotoStructureWithoutId,
    ): Promise<PhotoStructureWithoutId | undefined> => {
      try {
        dispatch(showLoadingActionsCreator());

        const {
          data: { photo },
        } = await axios.post<{ photo: PhotosStructure }>(
          "/photos/add",
          newPhoto,
        );

        dispatch(addPhotoActionsCreator(photo));

        toast.success("Great! Photo successfully added!", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "toast toast-success",
        });

        navigate("/");

        dispatch(hideLoadingActionsCreator());

        return photo;
      } catch {
        toast.error("Sorry! Your photo cannot be added!", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: "toast toast-error",
        });
        dispatch(hideLoadingActionsCreator());
      }
    },
    [dispatch, navigate],
  );

  return { getPhotosApi, deletePhoto: deletePhoto, addPhoto };
};

export default usePhotosApi;
