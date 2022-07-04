import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../../services/bookServises";
import { IBookDetailsApi } from "../../services/types/intex";
import { IDetailsBookSlice } from "./types";

const initialState: IDetailsBookSlice = {
  result: {
    authors: "",
    desc: "",
    error: "",
    image: "",
    isbn10: "",
    isbn13: "",
    language: "",
    pages: "",
    pdf: {},
    price: "",
    publisher: "",
    rating: "",
    subtitle: "",
    title: "",
    url: "",
    year: "",
  },
  error: null,
  status: "idle",
};

export const fetchBookDetails = createAsyncThunk<IBookDetailsApi, string>(
  "detailsBook/fetchBookDetails",
  async (isbn) => {
    return await bookApi.getBookDetails(isbn);
  }
);

const detailsBookSlice = createSlice({
  name: "detailsBook",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.result = payload;
    });
    builder.addCase(fetchBookDetails.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default detailsBookSlice.reducer;
