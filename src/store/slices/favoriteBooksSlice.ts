import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteBook } from "../../types/types";
import { IFavoriteBooksSlice } from "./types";

const initialState: IFavoriteBooksSlice = {
  results: [],
};

const favoriteBooksSlice = createSlice({
  name: "favoriteBooks",
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IFavoriteBook>) => {
      state.results = [
        { ...payload },
        ...state.results.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFavorite: (state, { payload }: PayloadAction<IFavoriteBook>) => {
      state.results = state.results.filter(
        (item) => item.isbn13 !== payload.isbn13
      );
    },
  },
});

export default favoriteBooksSlice.reducer;

export const { addFavorite, removeFavorite } = favoriteBooksSlice.actions;
