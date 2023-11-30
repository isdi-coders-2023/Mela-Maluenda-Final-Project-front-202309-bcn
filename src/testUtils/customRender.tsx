import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { photosReducer } from "../store/features/photosSlice";
import { PhotosStructure } from "../store/types";

const customRender = (
  children: React.ReactElement,
  photosMock: PhotosStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      photoState: photosReducer,
    },
    preloadedState: { photoState: { photos: photosMock } },
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

export default customRender;
