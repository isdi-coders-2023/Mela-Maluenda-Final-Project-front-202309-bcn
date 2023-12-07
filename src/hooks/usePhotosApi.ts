import axios from "axios";
import { useCallback } from "react";
import { PhotosStructure } from "../store/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionsCreator,
  showLoadingActionsCreator,
} from "../store/ui/uiSlice";

const usePhotosApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

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

  return { getPhotosApi, deletePhoto: deletePhoto };
};

export default usePhotosApi;
