import photosMock from "../../mocks/photosMock/photosMock";
import { customRender } from "../../testUtils/customRender";
import Form from "./Form";
import { screen } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a form with a title: 'Title'", () => {
      const expectedLabel = "Title:";

      customRender(<Form />, photosMock);

      const labelText = screen.getByLabelText(expectedLabel);

      expect(labelText).toBeInTheDocument();
    });
  });
});
