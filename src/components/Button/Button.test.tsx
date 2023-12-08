import { screen } from "@testing-library/react";
import Button from "./Button";
import { customRender } from "../../testUtils/customRender";

describe("Given a Button component", () => {
  describe("When it receives a text 'Modify'", () => {
    test("Then it should show a button with the ext 'Modify' inside", () => {
      const text = "Modify";

      customRender(<Button text={text} type={"button"} />);

      const buttonElement = screen.getByRole("button", { name: text });

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
