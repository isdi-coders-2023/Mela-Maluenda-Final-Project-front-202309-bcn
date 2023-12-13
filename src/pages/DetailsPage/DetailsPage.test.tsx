import { customRender } from "../../testUtils/customRender";
import DetailsPage from "./DetailsPage";
import { screen } from "@testing-library/react";

describe("Givent the DetailsPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a photo with an 'What made you click:: ' ", () => {
      const expectedClick = "What made you click:";

      customRender(<DetailsPage />);

      const photoClick = screen.getByText(expectedClick);

      expect(photoClick).toBeInTheDocument();
    });

    test("Then it should show a title with the text 'Photo details'", () => {
      const expectedTitle = "Photo details";

      customRender(<DetailsPage />);

      const button = screen.getByRole("heading", { name: expectedTitle });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a title with the text 'Photo details'", () => {
      const expectedTitle = "Photo details";

      customRender(<DetailsPage />);

      const button = screen.getByRole("heading", { name: expectedTitle });

      expect(button).toBeInTheDocument();
    });
  });
});
