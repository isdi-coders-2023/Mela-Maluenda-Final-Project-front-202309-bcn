import { customRender } from "../../testUtils/customRender";
import UpdatePage from "./UpdatePage";
import { screen } from "@testing-library/react";

describe("Given a UpdatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text: 'Modify your photo'", () => {
      const updateHeading = "Modify your photo";

      customRender(<UpdatePage />);

      const title = screen.getByRole("heading", { name: updateHeading });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a form 'Author:' label text", () => {
      const expectedLabel = "Author:";

      customRender(<UpdatePage />);

      const labelText = screen.getByLabelText(expectedLabel);

      expect(labelText).toBeInTheDocument();
    });
  });
});
