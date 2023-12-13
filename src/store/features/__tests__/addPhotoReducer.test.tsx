import {
  photoAddMock,
  photosAddMock,
} from "../../../mocks/photosMock/photosMock";
import { PhotosStructure } from "../../types";
import { addPhotoActionsCreator, photoReducer } from "../photosSlice";
import PhotosStateStructure from "../types";

describe("Given a addPhoto miniredcer", () => {
  describe("When it receives a list of photos and a new photo Ghost witout id", () => {
    test("Then it should return the same list of photos with the photo Ghost with id in it", () => {
      const mockList = photosAddMock;
      const mockaddPhoto = photoAddMock;
      const initialState: PhotosStateStructure = {
        photos: mockList,
        selectedPhoto: {} as PhotosStructure,
      };
      const newPhoto: PhotosStructure = mockaddPhoto[3];

      const currentPhotosState = photoReducer(
        initialState,
        addPhotoActionsCreator(newPhoto),
      );

      expect(currentPhotosState.photos).toStrictEqual(mockaddPhoto);
    });
  });
});
