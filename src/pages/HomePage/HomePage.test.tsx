import customRender from "../../testUtils/customRender"
import { screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the HomPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a ")
    const expectedTitle = "Street photography";

    customRender(<HomePage />);

    const title = screen.getByRole("heading", { name: expectedTitle });

    expect(title).toBeInTheDocument();
  })
})
