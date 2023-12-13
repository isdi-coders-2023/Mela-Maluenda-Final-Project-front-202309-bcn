import { photoAddMock } from "../../mocks/photosMock/photosMock";
import { providerWrapper } from "../../testUtils/customRender";
import usePhotosApi from "../usePhotosApi";
import { renderHook } from "@testing-library/react";

describe("Given a usePhotosApi hook", () => {
  const newPhoto = photoAddMock[3];
  describe("When its called with its loadSelectPhoto function and 'Caravaggio routines'", () => {
    test("Then it should return 'Caravaggio routines'", async () => {
      const expectedPhotoId = newPhoto._id;

      const {
        result: {
          current: { loadSelectPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const selectPhoto = await loadSelectPhoto(expectedPhotoId);

      expect(selectPhoto).toStrictEqual(newPhoto);
    });
  });
});
