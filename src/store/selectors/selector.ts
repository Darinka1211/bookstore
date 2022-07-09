import React from "react";
import { RootState } from "../store";

export const getCarts = (state: RootState) => state.cart.cartRoot.results;
export const getSumTotalCarts = (state: RootState) => state.cart.cartRoot.sumTotal;
export const getVatCarts = (state: RootState) => state.cart.cartRoot.vat;
export const getTotalCarts = (state: RootState) => state.cart.cartRoot.total;
export const getDetailsBook = (state: RootState) => state.detailsBook.result;
export const getDetailsBookStatus = (state: RootState) => state.detailsBook.status;
export const getDetailsBookError = (state: RootState) => state.detailsBook.error;
export const getFavoriteBooks = (state: RootState) => state.favoriteBook.favoriteBookRoot.results;
export const getNavSearchBooks = (state: RootState) => state.navSearchBooks.results;
export const getNavSearchBooksTotalPage = (state: RootState) => state.navSearchBooks.totalPage;
export const getNavSearchBooksCurrentPage = (state: RootState) => state.navSearchBooks.currentPage;
export const getNavSearchBooksStatus = (state: RootState) => state.navSearchBooks.status;
export const getNavSearchBooksError = (state: RootState) => state.navSearchBooks.error;
export const getNewBooks = (state: RootState) => state.newBooks.results;
export const getNewBooksStatus = (state: RootState) => state.newBooks.status;
export const getNewBooksError = (state: RootState) => state.newBooks.error;
export const getSearchBooks = (state: RootState) => state.searchBooks.results;
export const getSearchBooksTotalPage = (state: RootState) => state.searchBooks.totalPage;
export const getSearchBooksCurrentPage = (state: RootState) => state.searchBooks.currentPage;
export const getSearchBooksStatus = (state: RootState) => state.searchBooks.status;
export const getSearchBooksError = (state: RootState) => state.searchBooks.error;
export const getUser = (state: RootState) => state.user.userRoot;