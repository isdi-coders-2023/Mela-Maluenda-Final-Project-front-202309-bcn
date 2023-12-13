import { fireEvent, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import {
  customRender,
  customRenderWithoutRouter,
  providerWrapper,
} from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import { photoAddMock } from "../../mocks/photosMock/photosMock";
import usePhotosApi from "../../hooks/usePhotosApi";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Street photography'", () => {
      customRender(<App />);

      const title = "Street photography";
      const link = "home";
      const user = userEvent.setup();

      const navLink = screen.getByRole("link", { name: link });
      const homepageTitle = screen.getByRole("heading", { name: title });
      user.click(navLink);

      expect(homepageTitle).toBeInTheDocument();
      expect(navLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered with path '/home'", () => {
    test("Then it should show the the title: 'Street photo contest'", () => {
      const expectedTitle = "Street photo contest";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>,
      );

      const homeTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(homeTitle).toBeInTheDocument();
    });
  });

  describe("When its called with its loadSelectPhoto function and 'Caravaggio routines'", () => {
    test("Then it should return 'Caravaggio routines'", async () => {
      const newPhoto = photoAddMock[3];
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
      const newPhoto = photoAddMock[3];
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

  describe("When it is rendered on the ModifyPage and the user clicks on the button: 'Modify'", () => {
    test.only("Then it should modify the photo and go back to HomePage", async () => {
      const buttonText = "Modify";
      const titleText = "Street photography";
      const path = "/update/6563642be627443259cf3ce8";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", { name: buttonText });

      await fireEvent.submit(button);

      const title = await screen.findByRole("heading", {
        name: titleText,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
