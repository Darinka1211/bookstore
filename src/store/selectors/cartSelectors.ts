import { RootState } from "../store";

export const getCarts = (state: RootState) => state.cart.cartRoot.results;
export const getSumTotalCarts = (state: RootState) => state.cart.cartRoot.sumTotal;
export const getVatCarts = (state: RootState) => state.cart.cartRoot.vat;
export const getTotalCarts = (state: RootState) => state.cart.cartRoot.total;
