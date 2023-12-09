import { photoAddMock } from "../../../mocks/photosMock/photosMock";
import { PhotosStructure } from "../../types";
import { photoReducer, loadSelectPhotoActionsCreator } from "../photosSlice";
import PhotosStateStructure from "../types";

describe("Given a loadSelectPhoto mini-reducer", () => {
  describe("When it receives a photos list, a 'Caravaggio routines' and the action loadSelectPhoto", () => {
    test("Then it should return a new state with a list of photo 'Ghost, Urban angel, Deep thoughts, Caravaggio routines' with caravagio in it", () => {
      const initialPhotoState: PhotosStateStructure = {
        photos: photoAddMock,
        selectedPhoto: {} as PhotosStructure,
      };

      const selectedPhoto: PhotosStructure = photoAddMock[3];

      const currentPhotoState = photoReducer(
        initialPhotoState,
        loadSelectPhotoActionsCreator(selectedPhoto),
      );

      expect(currentPhotoState.selectedPhoto).toStrictEqual(selectedPhoto);
    });
  });
});
