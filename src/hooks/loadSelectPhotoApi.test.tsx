import { MemoryRouter } from "react-router-dom";
import { photoAddMock } from "../mocks/photosMock/photosMock";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../testUtils/customRender";
import App from "../components/App/App";
import usePhotosApi from "./usePhotosApi";
import { renderHook, screen } from "@testing-library/react";
import { errorHandlers } from "../mocks/handlers";
import server from "../mocks/node";

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

  describe("When it is called with its loadSelectPhoto function with a 'Caravaggio routines' and a failed response", () => {
    test("Then it should show the text 'Sorry! It's not possible to see the details photo, right now.' as a toastify message", async () => {
      server.use(...errorHandlers);

      const expectedPhotoId = newPhoto._id;
      const toastifyErrorMessage =
        "Sorry! It's not possible to see the details photo, right now.";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/photos/656366e0e627443259cf3cee"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { loadSelectPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      await loadSelectPhoto(expectedPhotoId);
      const toastify = await screen.findByText(toastifyErrorMessage);

      expect(toastify).toBeInTheDocument();
    });
  });
});
