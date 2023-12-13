import { screen, waitFor } from "@testing-library/react";
import PhotoCard from "./PhotoCard";
import { customRender } from "../../testUtils/customRender";
import userEvent from "@testing-library/user-event";
import { errorHandlers } from "../../mocks/handlers";
import server from "../../mocks/node";
import { photosMock } from "../../mocks/photosMock/photosMock";
import UpdatePage from "../../pages/UpdatePage/UpdatePage";

describe("Given a PhotoCard component", () => {
  describe("When it receives a 'Ghost'", () => {
    test("Then it should show 'Ghost' in a heading", () => {
      const mockContest = photosMock[0];
      customRender(<PhotoCard photo={mockContest} />);

      const expectedTitle = "« Ghost »";

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedHeadingElement).toBeInTheDocument();
    });

    test("Then it should show the text: 'Great! Photo successfully removed!' as a toastify succes message", async () => {
      const expectedToastifySucces = "Great! Photo successfully removed!";
      const buttonText = "Delete";

      customRender(<PhotoCard photo={photosMock[0]} />);

      const deleteButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(deleteButton);

      expect(screen.getByText(expectedToastifySucces)).toBeInTheDocument();
    });
  });

  describe("When it recives a click on 'Delete' button to the 'Urban angel' photo", () => {
    const buttonText = "Delete";
    test("Then it should delete 'Urban angel' from the list of photos", async () => {
      const mockContest = photosMock[1];
      const photoTitle = "« Urban angel »";

      customRender(<PhotoCard photo={mockContest} />);

      const button = screen.getByRole("button", { name: buttonText });
      const title = screen.getByRole("heading", { name: photoTitle });
      await userEvent.click(button);

      waitFor(() => {
        expect(title).not.toBeInTheDocument();
      });
    });

    test("Then it should show the text: 'Oops! The photo cannot be deleted!' as a toastify error message", async () => {
      server.use(...errorHandlers);
      const expectedToastifyError = "Oops! The photo cannot be deleted!";
      const buttonText = "Delete";

      customRender(<PhotoCard photo={photosMock[0]} />);

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(screen.getByText(expectedToastifyError)).toBeInTheDocument();
    });
  });

  describe("When it recives a click on 'Modify' button to the 'Urban angel' photo", () => {
    test("Then it should show the modify page with text: 'Modify your photo'", async () => {
      const mockContest = photosMock[1];
      const updateHeading = "Modify your photo";
      const buttonModify = "Modify";

      customRender(
        <>
          <PhotoCard photo={mockContest} />
          <UpdatePage />
        </>,
      );

      const button = screen.getAllByRole("button", { name: buttonModify });
      const title = screen.getByRole("heading", { name: updateHeading });
      await userEvent.click(button[0]);
      waitFor(() => {
        expect(title).toBeInTheDocument();
      });
    });
  });
});
