import photosMock from "../../mocks/photosMock";
import customRender from "../../testUtils/customRender";
import Navigation from "./Navigation";
import { screen } from "@testing-library/react";

describe("Given a navigation component", () => {
  describe("When it rendered", () => {
    const mockContest = photosMock;
    customRender(<Navigation />, mockContest);

    test("It should show a list with a Home name", () => {
      const expectedLiText = "Home";

      const liText = screen.getByRole("link", { name: expectedLiText });

      expect(liText).toBeInTheDocument();
    });
  });
});
