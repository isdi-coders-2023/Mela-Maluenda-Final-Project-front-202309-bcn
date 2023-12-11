import { customRender } from "../../testUtils/customRender";
import NotFoundPage from "./NotFoundPage";
import { screen } from "@testing-library/react";

describe("Given a Not Found page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title: 'Not found' with a message", () => {
      const expectedMessage = "We are unable to load the page at this time.";

      customRender(<NotFoundPage />);

      const pageNotFoundMessage = screen.getByText(expectedMessage);

      expect(pageNotFoundMessage).toBeInTheDocument();
    });
  });
});
