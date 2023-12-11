import { customRender } from "../../testUtils/customRender";
import Footer from "./Footer";
import { screen } from "@testing-library/react";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a footer with the text: '@MelaMaluenda 2023' in it", () => {
      const expectedText = "@MelaMaluenda 2023";

      customRender(<Footer />);

      const footerText = screen.getByText(expectedText);

      expect(footerText).toBeInTheDocument();
    });
  });
});
