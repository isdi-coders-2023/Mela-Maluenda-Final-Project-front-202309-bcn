import customRender from "../../testUtils/customRender";
import Navigation from "./Navigation";
import { screen } from "@testing-library/react";

describe("Given a navigation component", () => {
  describe("When it rendered", () => {
    customRender(<Navigation />);

    test("It should show a list with a Home name", () => {
      const expectedLiText = "Home";

      const liText = screen.getByRole("link", { name: expectedLiText });

      expect(liText).toBeInTheDocument();
    });
  });
});
