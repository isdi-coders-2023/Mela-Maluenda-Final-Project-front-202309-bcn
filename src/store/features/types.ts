import type { PhotosStructure } from "../types";

interface PhotosStateStructure {
  photos: PhotosStructure[];
  selectedPhoto: PhotosStructure;
}

export default PhotosStateStructure;
