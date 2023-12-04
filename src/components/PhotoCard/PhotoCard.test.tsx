import { screen } from "@testing-library/react";
import photosMock from "../../mocks/photosMock/photosMock";
import PhotoCard from "./PhotoCard";
import { customRender } from "../../testUtils/customRender";

describe("Given a PhotoCard component", () => {
  describe("When it receives a 'Ghost'", () => {
    test("Then it should show 'Ghost' in a heading", () => {
      const mockContest = photosMock[0];
      customRender(<PhotoCard photo={mockContest} />, photosMock);

      const expectedTitle = "« Ghost »";

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeadingElement).toBeInTheDocument();
    });
  });
});
