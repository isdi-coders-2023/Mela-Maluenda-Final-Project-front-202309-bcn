import { MemoryRouter } from "react-router-dom";
import { photoAddMock } from "../../mocks/photosMock/photosMock";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import App from "../../components/App/App";
import usePhotosApi from "../usePhotosApi";
import { renderHook, screen } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";

describe("Given a usePhotosApi hook", () => {
  const newPhoto = photoAddMock[3];
  describe("When its called with its loadSelectPhoto function and 'Caravaggio routines'", () => {
    test("Then it should return 'Caravaggio routines'", async () => {
      const expectedPhotoId = newPhoto._id;
      const expectedClick =
        "These are old pals from my village. Every second day, they are playing cards. But that day the sun got in the bar and that light remind me a Caravaggio painting, I unwrapped my camera as fast as I could to capture this photograph that looks like a painting.";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/details/656366e0e627443259cf3cee"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { loadSelectPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      await loadSelectPhoto(expectedPhotoId);
      const photo = await screen.getByText(expectedClick);

      expect(photo).toBeInTheDocument();
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
