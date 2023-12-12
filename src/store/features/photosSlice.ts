import { PhotosStructure } from "../types";
import PhotosStateStructure from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialPhotosState: PhotosStateStructure = {
  photos: [],
  selectedPhoto: {} as PhotosStructure,
};

const photosSlice = createSlice({
  name: "photos",
  initialState: initialPhotosState,
  reducers: {
    loadPhotos: (
      currentState,
      action: PayloadAction<PhotosStructure[]>,
    ): PhotosStateStructure => ({
      ...currentState,
      photos: action.payload,
    }),

    deletePhoto: (
      currentState,
      action: PayloadAction<string>,
    ): PhotosStateStructure => ({
      ...currentState,
      photos: currentState.photos.filter(
        (photo) => photo._id !== action.payload,
      ),
    }),

    addPhoto: (
      currentState,
      action: PayloadAction<PhotosStructure>,
    ): PhotosStateStructure => ({
      ...currentState,
      photos: [...currentState.photos, action.payload],
    }),

    loadSelectPhoto: (
      currentState,
      action: PayloadAction<PhotosStructure>,
    ) => ({
      ...currentState,
      selectedPhoto: action.payload,
    }),

    modifyPhoto: (currentState, action: PayloadAction<PhotosStructure>) => ({
      ...currentState,
      photos: currentState.photos.map((photo) =>
        photo._id == action.payload._id ? action.payload : photo,
      ),
    }),
  },
});

export const {
  loadPhotos: loadPhotosActionCreator,
  deletePhoto: deletePhotoActionsCreator,
  addPhoto: addPhotoActionsCreator,
  loadSelectPhoto: loadSelectPhotoActionsCreator,
  modifyPhoto: modifyPhotoActionsCreator,
} = photosSlice.actions;

export const photoReducer = photosSlice.reducer;
