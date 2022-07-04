import { RootState } from "../store";

export const getDetailsBook = (state: RootState) => state.detailsBook.result;
export const getDetailsBookStatus = (state: RootState) => state.detailsBook.status;
export const getDetailsBookError = (state: RootState) => state.detailsBook.error;
