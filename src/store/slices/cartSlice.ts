import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../../types/types";
import { ICartSlice } from "./types";

interface IQuantity {
  isbn13: string;
  value: number;
}

const initialState: ICartSlice = {
  results: [],
  vat: 0,
  sumTotal: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }: PayloadAction<ICart>) => {
      state.results = [
        { ...payload },
        ...state.results.filter((book) => book.isbn13 !== payload.isbn13),
      ];
      state.total = parseFloat(
        state.results
          .reduce((total, { totalPrice }) => total + Number(totalPrice), 0)
          .toFixed(2)
      );
      state.vat = parseFloat(((state.total / 100) * 10).toFixed(2));
      state.sumTotal = parseFloat((state.total - state.vat).toFixed(2));
    },
    removeCart: (state, { payload }: PayloadAction<ICart>) => {
      state.results = state.results.filter(
        (book) => book.isbn13 !== payload.isbn13
      );
      state.total = parseFloat(
        state.results
          .reduce((total, { totalPrice }) => total + Number(totalPrice), 0)
          .toFixed(2)
      );
      state.vat = parseFloat(((state.total / 100) * 10).toFixed(2));
      state.sumTotal = parseFloat((state.total - state.vat).toFixed(2));
    },
    removeAllCart: (state) => {
      state.results = [];
      state.total = 0;
      state.vat = 0;
      state.sumTotal = 0;
    },
    updateQuantity: (state, { payload }: PayloadAction<IQuantity>) => {
      const { isbn13, value } = payload;
      state.results.forEach((item) => {
        if (item.isbn13 === isbn13) {
          item.quantity = value;
          item.totalPrice = (
            Number(item.price.slice(1)) * item.quantity
          ).toFixed(2);
        }
      });
      state.total = parseFloat(
        state.results
          .reduce((total, { totalPrice }) => total + Number(totalPrice), 0)
          .toFixed(2)
      );
      state.vat = parseFloat(((state.total / 100) * 10).toFixed(2));
      state.sumTotal = parseFloat((state.total - state.vat).toFixed(2));
    },
  },
});

export default cartSlice.reducer;

export const { addCart, removeCart, removeAllCart, updateQuantity } =
  cartSlice.actions;
