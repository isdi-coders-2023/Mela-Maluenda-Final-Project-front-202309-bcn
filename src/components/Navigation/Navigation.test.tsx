import { screen } from "@testing-library/react";
import photosMock from "../../mocks/photosMock/photosMock";
import Navigation from "./Navigation";
import { customRender } from "../../testUtils/customRender";

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
