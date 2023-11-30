import customRender from "../../testUtils/customRender";
import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import photosMock from "../../mocks/photosMock";

describe("Given the HomPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a ");
    const expectedTitle = "Street photography";
    const mockContest = photosMock;

    customRender(<HomePage />, mockContest);

    const title = screen.getByRole("heading", { name: expectedTitle });

    expect(title).toBeInTheDocument();
  });
});
