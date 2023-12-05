import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { photosReducer } from "../store/features/photosSlice";
import { PhotosStructure } from "../store/types";
import photosMock from "../mocks/photosMock/photosMock";
import { uiReducer } from "../store/ui/uiSlice";
import { store } from "../store";

export const customRender = (
  children: React.ReactElement,
  photosMock: PhotosStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      photoState: photosReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      photoState: { photos: photosMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      photosState: photosReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      photosState: { photos: photosMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
