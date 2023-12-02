import customRender from "../../testUtils/customRender";
import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import photosMock from "../../mocks/photosMock/photosMock";

describe("Given the HomPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title 'Street photography' ");
    const mockContest = photosMock;
    customRender(<HomePage />, mockContest);

    const expectedTitle = "Street photography";

    const title = screen.getByRole("heading", { name: expectedTitle });

    expect(title).toBeInTheDocument();
  });
});
