import { screen, waitFor } from "@testing-library/react";
import photosMock from "../../mocks/photosMock/photosMock";
import PhotoCard from "./PhotoCard";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";

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

  describe("When it recives a click on 'Delete' button to the 'Urban angel' photo", () => {
    test("Then it should delete 'Urban angel' from the list of photos", async () => {
      const mockContest = photosMock[1];
      const buttonText = "Delete";
      const photoTitle = "« Urban angel »";

      customRender(<PhotoCard photo={mockContest} />, photosMock);
      const button = screen.getByRole("button", { name: buttonText });
      const title = screen.getByRole("heading", { name: photoTitle });
      await userEvent.click(button);

      waitFor(() => {
        expect(title).not.toBeInTheDocument();
      });
    });
  });
});
