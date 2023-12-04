import { screen } from "@testing-library/react";
import photosMock from "../../mocks/photosMock/photosMock";
import PhotosList from "./PhotosList";
import { customRender } from "../../testUtils/customRender";

describe("Given a PhotosList component", () => {
  describe("When it receives a list of photos title", () => {
    test("Then it should show 'Ghost'", () => {
      const mockContest = photosMock;
      customRender(<PhotosList />, mockContest);

      const expectedTitle = "« Ghost »";

      const photosHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(photosHeadingElement).toBeInTheDocument();
    });
  });
});
