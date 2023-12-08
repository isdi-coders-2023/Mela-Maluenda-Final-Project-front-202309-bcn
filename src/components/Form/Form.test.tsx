import userEvent from "@testing-library/user-event";
import { customRender } from "../../testUtils/customRender";
import Form from "./Form";
import { screen, waitFor } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a title: 'Title'", () => {
      const expectedLabel = "Title:";

      customRender(<Form />);

      const inputText = screen.getByLabelText(expectedLabel);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in all the text input fields", () => {
    test("Then it should show the new text in the fields", async () => {
      const expectedInput = "Enrique Muda";

      customRender(<Form />);

      const labelText = screen.getByLabelText("Author:");

      await userEvent.type(labelText, expectedInput);

      const inputText = screen.getByDisplayValue(expectedInput);
      await waitFor(() => expect(inputText));
    });
  });
});
