import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { photosReducer as photoReducer } from "./features/photosSlice";

export const store = configureStore({
  reducer: { photoState: photoReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
