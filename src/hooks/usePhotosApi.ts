import axios from "axios";
import { PhotosStructure } from "../store/types";
import { useCallback } from "react";

const usePhotosApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getPhotosApi = useCallback(async () => {
    const { data: photos } = await axios.get<{
      photos: PhotosStructure[];
    }>("/photos");

    return photos;
  }, []);
  return { getPhotosApi };
};

export default usePhotosApi;
