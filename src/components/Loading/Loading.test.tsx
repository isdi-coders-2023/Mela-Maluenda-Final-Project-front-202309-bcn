import photosMock from "../../mocks/photosMock/photosMock";
import { customRender } from "../../testUtils/customRender";
import { screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Loading ...'", () => {
      const expectedText = "Loading ...";

      customRender(<Loading />, photosMock);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
