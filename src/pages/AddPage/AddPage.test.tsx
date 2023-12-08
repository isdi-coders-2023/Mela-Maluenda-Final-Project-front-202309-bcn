import photosMock from "../../mocks/photosMock/photosMock";
import { customRender } from "../../testUtils/customRender";
import AddPage from "./AddPage";
import { screen } from "@testing-library/react";

describe("Given the AddPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title: 'Join the contest'", () => {
      const expectedTitle = "Join the contest";

      const mockContest = photosMock;
      customRender(<AddPage />, mockContest);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show a title: 'Contest rules detail'", () => {
      const expectedTitle = "Contest rules detail";

      const mockContest = photosMock;
      customRender(<AddPage />, mockContest);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
