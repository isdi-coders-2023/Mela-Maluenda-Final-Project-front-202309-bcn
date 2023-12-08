import { screen, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";
import { customRender } from "../../testUtils/customRender";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";

describe("Given the HomPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Street photography'", () => {
      const expectedTitle = "Street photography";

      customRender(<HomePage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and an error ocurred", () => {
    test("Then it should show the text: 'Error! Something went wrong. Try again!' as a toastify error message", async () => {
      server.use(...errorHandlers);
      customRender(<HomePage />);

      const expectedToastifyError = "Error! Something went wrong. Try again!";

      await waitFor(() => {
        expect(screen.getByText(expectedToastifyError)).toBeInTheDocument();
      });
    });
  });
});
