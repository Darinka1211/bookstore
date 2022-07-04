import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookServises";
import { ISearchBooksApi } from "../../services/types/intex";
import { ISearchBooksSlice } from "./types";

interface IArguments {
  title: string;
  page: string;
}

const initialState: ISearchBooksSlice = {
  results: {
    books: [],
    error: null,
    total: "0",
  },
  totalPage: 1,
  currentPage: 1,
  error: null,
  status: "idle",
};

export const fetchNavSearchBooks = createAsyncThunk<
  ISearchBooksApi,
  IArguments
>("navSearchBooks/fetchSearchBooks", async ({ title, page }) => {
  return await bookApi.getBooksBySearch(title, page);
});

const navSearchBooksSlice = createSlice({
  name: "navSearchBooks",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNavSearchBooks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchNavSearchBooks.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.results = payload;
      state.totalPage = Math.round(Number(payload.total) / 10);
    });
    builder.addCase(fetchNavSearchBooks.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default navSearchBooksSlice.reducer;

export const { setCurrentPage } = navSearchBooksSlice.actions;
