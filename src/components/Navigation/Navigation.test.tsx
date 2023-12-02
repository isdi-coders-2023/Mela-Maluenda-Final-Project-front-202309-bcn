import { screen } from "@testing-library/react";
import photosMock from "../../mocks/photosMock";
import customRender from "../../testUtils/customRender";
import Navigation from "./Navigation";

describe("Given a navigation component", () => {
  describe("When it rendered", () => {
    const mockContest = photosMock;
    customRender(<Navigation />, mockContest);

    test("Then it should show a 'home' link", () => {
      const expectedText = "home";

      const expectedHomeLink = screen.getByRole("link", { name: expectedText });

      expect(expectedHomeLink).toBeInTheDocument();
    });
  });
});
