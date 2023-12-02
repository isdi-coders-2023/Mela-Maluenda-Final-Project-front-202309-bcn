import { screen } from "@testing-library/react";
import photosMock from "../../mocks/photosMock";
import customRender from "../../testUtils/customRender";
import PhotoCard from "./PhotoCard";
import { photoData } from "../../data/photosData/photosData";

describe("Given a PhotoCard component", () => {
  describe("When it receives a 'Ghost'", () => {
    test("Then it should show 'Ghost' in a heading", () => {
      const mockContest = photosMock;
      customRender(<PhotoCard photo={photoData} />, mockContest);

      const expectedTitle = "« Ghost »";

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeadingElement).toBeInTheDocument();
    });
  });
});
