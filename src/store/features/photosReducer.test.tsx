import photosMock from "../../mocks/photosMock";
import { loadPhotosActionCreator, photosReducer } from "./photosSlice";
import PhotosStateStructure from "./types";

describe("Given a loadPhotos reducer", () => {
  describe("When it is call with te current state and the action to load photos", () => {
    test("Then it should return a new state with a list of 'Ghost, Urban angel and Deep thoughts'", () => {
      const currentPhotoState: PhotosStateStructure = { photos: [] };

      const loadPhotos = photosMock;

      const useReducer = photosReducer(
        currentPhotoState,
        loadPhotosActionCreator(loadPhotos),
      );

      expect(useReducer.photos).toBe(loadPhotos);
    });
  });
});
