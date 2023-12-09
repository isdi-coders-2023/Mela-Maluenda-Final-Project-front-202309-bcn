import { renderHook, screen } from "@testing-library/react";
import usePhotosApi from "./usePhotosApi";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../testUtils/customRender";
import { photoAddMock, photosMock } from "../mocks/photosMock/photosMock";
import { errorHandlers } from "../mocks/handlers";
import server from "../mocks/node";
import { MemoryRouter } from "react-router-dom";
import App from "../components/App/App";

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

      expect(photos).toStrictEqual(expectedPhotos);
    });
  });

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

  describe("When it calls the addPhoto method with a 'Caravaggio routines'", () => {
    test("Tehn it should receive the 'Caravaggio routines' to the list of photos", async () => {
      const newPhoto = photoAddMock[3];

      const {
        result: {
          current: { addPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const response = await addPhoto(newPhoto);

      expect(response).toStrictEqual(newPhoto);
    });

    test("Then it should show: 'Great! Photo successfully added!'as a toastify error message ", async () => {
      server.use(...errorHandlers);
      const newPhoto = photoAddMock[3];
      const expectedToastifyError = "Great! Photo successfully added!";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/add"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      await addPhoto(newPhoto);

      const feedbackScuccess = await screen.findByText(expectedToastifyError);

      expect(feedbackScuccess).toBeInTheDocument();
    });
  });

  describe("When it is called with with its addPhoto function with 'Caravaggio routines' and response fails", () => {
    test("Then it should show the text: Sorry! Your photo cannot be added!", async () => {
      server.use(...errorHandlers);
      const newPhoto = photoAddMock[3];
      const expectedToastifyError = "Sorry! Your photo cannot be added!";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/add"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      await addPhoto(newPhoto);

      const feedbackScuccess = await screen.findByText(expectedToastifyError);

      expect(feedbackScuccess).toBeInTheDocument();
    });
  });
});
