import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookApi,INewBooksApi,INewBooksSlice  } from "../../servise/serviseBook";



const initialState: INewBooksSlice = {
  results: {
    books: [],
    error: null,
    total: "0",
  },
  error: null,
  status: "idle",
};

export const fetchNewBooks = createAsyncThunk<INewBooksApi>(
  "newBooks/fetchNewBooks",
  async () => {
    return bookApi.getNewBooks();
  }
);

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.results = payload;
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export default newBooksSlice.reducer;
