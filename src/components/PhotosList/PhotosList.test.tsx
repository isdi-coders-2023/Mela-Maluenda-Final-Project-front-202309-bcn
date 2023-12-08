import { screen } from "@testing-library/react";
import PhotosList from "./PhotosList";
import { customRender } from "../../testUtils/customRender";

describe("Given a PhotosList component", () => {
  describe("When it receives a list of photos", () => {
    test("Then it should show 'Ghost'", () => {
      const expectedTitle = "« Ghost »";

      customRender(<PhotosList />);

      const photosHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(photosHeadingElement).toBeInTheDocument();
    });

    test("Then it should show 'Urban angel'", () => {
      const expectedTitle = "« Urban angel »";

      customRender(<PhotosList />);

      const photosHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(photosHeadingElement).toBeInTheDocument();
    });

    test("Then it should show 'Ghost'", () => {
      const expectedTitle = "« Deep thoughts »";

      customRender(<PhotosList />);

      const photosHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(photosHeadingElement).toBeInTheDocument();
    });
  });
});
