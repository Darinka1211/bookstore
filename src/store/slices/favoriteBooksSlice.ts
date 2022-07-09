import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFavoriteBook {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  rating: string;
}
interface IFavoriteBooksSlice {
  results: IFavoriteBook[];
}

const initialState: IFavoriteBooksSlice = {
  results: [],
};

const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<IFavoriteBook>) => {
      state.results = [
        { ...payload },
        ...state.results.filter((item) => item.isbn13 !== payload.isbn13),
      ];
    },
    removeFavorite: (state, { payload }: PayloadAction<IFavoriteBook>) => {
      state.results = state.results.filter((item) => item.isbn13 !== payload.isbn13);
    },
  },
});

export default favoriteBooksSlice.reducer;

export const { addFavorite, removeFavorite } = favoriteBooksSlice.actions;
