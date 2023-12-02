import axios from "axios";
import { PhotosStructure } from "../store/types";

const usePhotosApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getPhotosApi = async (): Promise<PhotosStructure> => {
    const { data: photos } = await axios.get("/photos");
    return photos;
  };
  return { getPhotosApi };
};

export default usePhotosApi;
