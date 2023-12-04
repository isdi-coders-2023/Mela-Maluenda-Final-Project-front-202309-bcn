import {
  hideErrorActionsCreator,
  hideLoadingActionsCreator,
  showErrorActionsCreator,
  showLoadingActionsCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives a currentUIState with the property isLoading false", () => {
    test("Then it should change the property to true", () => {
      const initialMockedUiState = { isLoading: true };
      const isLoadingTrue = uiReducer(
        initialMockedUiState,
        showLoadingActionsCreator(),
      );

      expect(isLoadingTrue).toStrictEqual(initialMockedUiState);
    });
  });
});

describe("Given a hideLoading minireducer", () => {
  describe("When it receives a currentUIState with the property isLoading true", () => {
    test("Then it should change the property to false", () => {
      const initialMockedUiState = { isLoading: false };
      const isLoadingFalse = uiReducer(
        initialMockedUiState,
        hideLoadingActionsCreator(),
      );

      expect(isLoadingFalse).toStrictEqual(initialMockedUiState);
    });
  });
});

describe("Given a showError minireducer", () => {
  describe("When it receives a currentUIState with the property isError false", () => {
    test("Then it should change the property to true", () => {
      const initialMockedUiState = { isError: false };
      const finalMockedUiState = { isError: true };

      const isErrorTrue = uiReducer(
        initialMockedUiState,
        showErrorActionsCreator(),
      );

      expect(isErrorTrue).toStrictEqual(finalMockedUiState);
    });
  });
});

describe("Given a hideError minireducer", () => {
  describe("When it receives a currentUIState with the property isError true", () => {
    test("Then it should change the property to false", () => {
      const initialMockedUiState = { isError: true };
      const finalMockedUiState = { isError: false };

      const isErrorFalse = uiReducer(
        initialMockedUiState,
        hideErrorActionsCreator(),
      );

      expect(isErrorFalse).toStrictEqual(finalMockedUiState);
    });
  });
});
