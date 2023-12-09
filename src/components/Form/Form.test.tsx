import userEvent from "@testing-library/user-event";
import { customRender } from "../../testUtils/customRender";
import Form from "./Form";
import { fireEvent, screen } from "@testing-library/react";

describe("Given a Form component", () => {
  const actionOnClick = vi.fn();
  describe("When it is rendered", () => {
    test("Then it should show a form with a title: 'Title'", () => {
      const expectedLabel = "Title:";

      customRender(<Form onSubmit={actionOnClick} />);

      const inputText = screen.getByLabelText(expectedLabel);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in all the text input fields", () => {
    test("Then it should show the new text in the fields", async () => {
      const expectedInput = "Enrique Muda";
      const expectedLabel = "Author:";

      customRender(<Form onSubmit={actionOnClick} />);

      const labelText = screen.getByLabelText(expectedLabel);
      await userEvent.type(labelText, expectedInput);

      const inputText = screen.getByDisplayValue(expectedInput);

      expect(inputText).toHaveValue(expectedInput);
    });
  });

  describe("When it is rendered and the user clicks the button to create  new photo", () => {
    test("Then it should call its onSubmit action", async () => {
      const expectedLabel = "Title:";

      customRender(<Form onSubmit={actionOnClick} />);

      const form = screen.getByLabelText(expectedLabel);

      fireEvent.submit(form);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user fills all the inputs and click the 'add photo' button", () => {
    test("Then it should call its actionOnClick function", async () => {
      const actionOnClick = vi.fn();
      const expectedButtonText = "add photo";

      const stringLabelText = [
        "Title:",
        "Author:",
        "Location:",
        "Public space:",
        "Category:",
        "Portfolio url:",
        "What made you click:",
        "Add the image url:",
      ];
      const numberLabelText = ["Year:"];
      const urlInput = "http://www.eldelasfotos.com";
      const yearInput = 2022;

      customRender(<Form onSubmit={actionOnClick} />);

      for (const labelText of stringLabelText) {
        const inputElemet = screen.getByLabelText(labelText);
        await userEvent.type(inputElemet, urlInput);
      }

      for (const labelText of numberLabelText) {
        const inputElement = screen.getByLabelText(labelText);
        await userEvent.type(inputElement, yearInput.toString());
      }

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButtonElement);

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
