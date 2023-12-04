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

  return { getPhotosApi };
};

export default usePhotosApi;
