import { customRender } from "../../testUtils/customRender";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given the component header", () => {
  describe("When it rerendered", () => {
    test("Then it should show a logo with the alt: 'Logo that say's Walk the line'", () => {
      const expectedAltText = "Logo that say's Walk the line";

      customRender(<Header />);

      const imageAltText = screen.getByAltText(expectedAltText);

      expect(imageAltText).toBeInTheDocument();
    });
  });
});
