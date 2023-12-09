import { photosMock } from "../../../mocks/photosMock/photosMock";
import { PhotosStructure } from "../../types";
import { deletePhotoActionsCreator, photoReducer } from "../photosSlice";
import PhotosStateStructure from "../types";

describe("Given a photosSlice with a deletePhoto minireducer", () => {
  describe("When it receives a list of photos and the photo 'Urban angel' id", () => {
    test("Then it should return the list of photos without 'Urban angel' photo", () => {
      const initialState: PhotosStateStructure = {
        photos: photosMock,
        selectedPhoto: {} as PhotosStructure,
      };
      const expectedDeletephoto = "Urban angel";

      const currentPhotosState = photoReducer(
        initialState,
        deletePhotoActionsCreator("656360dae627443259cf3ce4"),
      );

      currentPhotosState.photos.forEach((photo) => {
        expect(photo).not.toHaveProperty("name", expectedDeletephoto);
      });
    });
  });
});
