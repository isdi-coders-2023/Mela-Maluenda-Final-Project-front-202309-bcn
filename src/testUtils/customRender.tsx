import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { photoReducer } from "../store/features/photosSlice";
import { uiReducer } from "../store/ui/uiSlice";
import { store } from "../store";
import { ToastContainer } from "react-toastify";
import { photosMock } from "../mocks/photosMock/photosMock";
import { PhotosStructure } from "../store/types";

export const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      photoState: photoReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      photoState: {
        photos: photosMock,
        selectedPhoto: {} as PhotosStructure,
      },
      uiState: { isLoading: false },
    },
  });

  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <ToastContainer />
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
      photoState: photoReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      photoState: {
        photos: photosMock,
        selectedPhoto: {} as PhotosStructure,
      },
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
