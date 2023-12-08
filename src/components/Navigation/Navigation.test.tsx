import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { customRender } from "../../testUtils/customRender";

describe("Given a navigation component", () => {
  describe("When it rendered", () => {
    test("Then it should show a 'home' link", () => {
      const expectedText = "home";

      customRender(<Navigation />);

      const expectedHomeLink = screen.getByRole("link", { name: expectedText });

      expect(expectedHomeLink).toBeInTheDocument();
    });
  });
});
