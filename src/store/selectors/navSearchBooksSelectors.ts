import { RootState } from "../store";

export const getNavSearchBooks = (state: RootState) => state.navSearchBooks.results;
export const getNavSearchBooksTotalPage = (state: RootState) => state.navSearchBooks.totalPage;
export const getNavSearchBooksCurrentPage = (state: RootState) => state.navSearchBooks.currentPage;
export const getNavSearchBooksStatus = (state: RootState) => state.navSearchBooks.status;
export const getNavSearchBooksError = (state: RootState) => state.navSearchBooks.error;
