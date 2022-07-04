import { RootState } from "../store";

export const getSearchBooks = (state: RootState) => state.searchBooks.results;
export const getSearchBooksTotalPage = (state: RootState) => state.searchBooks.totalPage;
export const getSearchBooksCurrentPage = (state: RootState) => state.searchBooks.currentPage;
export const getSearchBooksStatus = (state: RootState) => state.searchBooks.status;
export const getSearchBooksError = (state: RootState) => state.searchBooks.error;
