import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import Button from "./Button";
import photosMock from "../../mocks/photosMock/photosMock";

describe("Given a Button component", () => {
  describe("When it receives a text 'Modify'", () => {
    test("Then it should show a button with the ext 'Modify' inside", () => {
      const text = "Modify";

      const mockContest = photosMock;
      customRender(<Button text={text} type={"button"} />, mockContest);

      const buttonElement = screen.getByRole("button", { name: text });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
