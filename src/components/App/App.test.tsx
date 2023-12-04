import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import photosMock from "../../mocks/photosMock/photosMock";
import App from "./App";
import { customRender } from "../../testUtils/customRender";

describe("Given the App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Street photography'", () => {
      const mockContest = photosMock;
      customRender(<App />, mockContest);

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
});
