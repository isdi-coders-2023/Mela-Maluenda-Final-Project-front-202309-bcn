import { renderHook } from "@testing-library/react";
import photosMock from "../mocks/photosMock/photosMock";
import usePhotosApi from "./usePhotosApi";

describe("Given a usePhotosApi hook", () => {
  describe("when it gets the photos list information", () => {
    test("Then it should show a list of photos", async () => {
      const expectedPhotos = photosMock;

      const {
        result: {
          current: { getPhotosApi },
        },
      } = renderHook(() => usePhotosApi());

      const photos = await getPhotosApi();

      expect(photos).toStrictEqual(expectedPhotos);
    });
  });
});
