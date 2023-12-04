import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { photosReducer as photoReducer } from "./features/photosSlice";
import { uiReducer } from "./ui/uiSlice";

export const store = configureStore({
  reducer: { photoState: photoReducer, uiState: uiReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
