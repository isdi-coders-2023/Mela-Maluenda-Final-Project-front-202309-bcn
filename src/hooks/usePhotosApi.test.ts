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
});
