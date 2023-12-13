import { renderHook } from "@testing-library/react";
import usePhotosApi from "../usePhotosApi";
import {
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import {
  modifiedDeepThoughtsMock,
  photosMock,
  photosModifiedMocks,
} from "../../mocks/photosMock/photosMock";
import { screen } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";
import server from "../../mocks/node";

describe("Given a a usePhotosApi hook", () => {
  describe("When it is called with a modifyPhoto function with id 'Deep thoughts' photo", () => {
    test("Then it should show the photo 'Deep thoughts' modified", async () => {
      const modifiedPhotoId = photosMock[2]._id;

      const {
        result: {
          current: { modifyPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      const photo = await modifyPhoto(modifiedPhotoId, photosMock[2]);

      expect(photo).toStrictEqual(modifiedDeepThoughtsMock);
    });
  });

  test("Then it should show the toastify message: 'Congratulations. You have successfully modified the photo data.!'", async () => {
    server.use(...errorHandlers);

    const modifiedPhotoId = photosMock[2]._id;
    const toastifyMessage =
      "Congratulations. You have successfully modified the photo data.!";

    customRenderWithoutRouter(
      <MemoryRouter initialEntries={["/update/6563642be627443259cf3ce8"]}>
        <App />
      </MemoryRouter>,
    );

    const {
      result: {
        current: { modifyPhoto },
      },
    } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

    await modifyPhoto(modifiedPhotoId, photosModifiedMocks[2]);
    const toastifyFeedback = await screen.findByText(toastifyMessage);

    expect(toastifyFeedback).toBeInTheDocument();
  });

  describe("When it is called with its modifyPhoto funtion with a id 'Deep thoughts' photo and the response fails", () => {
    test("Then it should show the toastify message: Sorry! Your photo cannot be modified!", async () => {
      server.use(...errorHandlers);

      const modifiedPhotoId = photosMock[2]._id;
      const toastifyMessage = "Sorry! Your photo cannot be modified!";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/update/6563642be627443259cf3ce8"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { modifyPhoto },
        },
      } = renderHook(() => usePhotosApi(), { wrapper: providerWrapper });

      await modifyPhoto(modifiedPhotoId, photosModifiedMocks[2]);
      const toastifyFeedback = await screen.findByText(toastifyMessage);

      expect(toastifyFeedback).toBeInTheDocument();
    });
  });
});
