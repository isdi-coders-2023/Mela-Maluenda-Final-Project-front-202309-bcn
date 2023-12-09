import { renderHook } from "@testing-library/react";
import { photosMock } from "../../mocks/photosMock/photosMock";
import { providerWrapper } from "../../testUtils/customRender";
import usePhotosApi from "../usePhotosApi";

describe("Given a usePhotosApi hook", () => {
  describe("When it calls the deletePhoto method with a 'Urban angel' id", () => {
    test("Then it should delete the 'Urban angel' photo from the list of photos", async () => {
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
