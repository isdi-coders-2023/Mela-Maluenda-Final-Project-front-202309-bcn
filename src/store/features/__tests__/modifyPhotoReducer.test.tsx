import {
  modifiedDeepThoughtsMock,
  photosMock,
  photosModifiedMocks,
} from "../../../mocks/photosMock/photosMock";
import { PhotosStructure } from "../../types";
import { modifyPhotoActionsCreator, photoReducer } from "../photosSlice";
import PhotosStateStructure from "../types";

describe("Given a photosSlice with a deletePhoto minireducer", () => {
  describe("When it receives a photo list with 'Deep thoughts' photo", () => {
    test("Then it should return the list of photos with the 'Deep thoughts' modified", () => {
      const modifiedPhoto = {
        ...photosMock[2],
        location: "Antártida",
        publicSpace: "Bus station",
      };

      const initialState: PhotosStateStructure = {
        photos: photosMock,
        selectedPhoto: {} as PhotosStructure,
      };

      const currentPhotoState = photoReducer(
        initialState,
        modifyPhotoActionsCreator(modifiedPhoto),
      );

      expect(currentPhotoState.photos).toStrictEqual(photosModifiedMocks);
    });
  });
});
