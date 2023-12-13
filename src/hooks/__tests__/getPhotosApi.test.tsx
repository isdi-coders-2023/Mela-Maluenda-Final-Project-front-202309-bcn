import { renderHook } from "@testing-library/react";
import { photosMock } from "../../mocks/photosMock/photosMock";
import { providerWrapper } from "../../testUtils/customRender";
import usePhotosApi from "../usePhotosApi";

describe("Given a usePhotosApi hook", () => {
  describe("when it callls de getPhotosApi method", () => {
    test("Then it should return the information of 'Ghost, Urban angel and Deep thoughts'", async () => {
      const expectedPhotos = photosMock;

      const {
        result: {
          current: { getPhotosApi },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const photos = await getPhotosApi();

      expect(photos).toStrictEqual({ photos: expectedPhotos });
    });
  });
});
