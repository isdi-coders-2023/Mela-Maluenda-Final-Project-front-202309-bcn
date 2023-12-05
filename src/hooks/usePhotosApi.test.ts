import { renderHook } from "@testing-library/react";
import photosMock from "../mocks/photosMock/photosMock";
import usePhotosApi from "./usePhotosApi";
import { providerWrapper } from "../testUtils/customRender";

describe("Given a usePhotosApi hook", () => {
  describe("when it is called", () => {
    test("Then it should return the information of a list of photos", async () => {
      const expectedPhotos = photosMock;

      const {
        result: {
          current: { getPhotosApi },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const photos = await getPhotosApi();

      expect(photos).toStrictEqual(expectedPhotos);
    });
  });

  describe("When it calls the deletePhoto method with a 'Urban angel' id", () => {
    test.only("Then it should delete the 'Urban angel' photo from the API Rest", async () => {
      const expectedPhotoId = photosMock[1]._id;
      const expectedEmptyObject = {};

      const {
        result: {
          current: { deletePhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const response = await deletePhoto(expectedPhotoId);

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });
});
