import { INewBooksApi } from "../../../services/types/intex";
import {
  IBook,
  IBookDetails,
  ICart,
  IFavoriteBook,
} from "../../../types/types";

export interface IUserStrore {
  isAuth: boolean;
  email: string | null;
}

export interface INewBooksSlice {
  results: INewBooksApi;
  error: any;
  status: RequestStatusType;
}

export interface ISearchBooksSlice {
  results: {
    error: string | null;
    total: string;
    books: IBook[];
  };
  totalPage: number;
  currentPage: number;
  error: any;
  status: RequestStatusType;
}

export interface IDetailsBookSlice {
  result: IBookDetails;
  error: any;
  status: RequestStatusType;
}

export interface IFavoriteBooksSlice {
  results: IFavoriteBook[];
}

export interface ICartSlice {
  results: ICart[];
  vat: number;
  sumTotal: number;
  total: number;
}

export interface IRecommendedBooksSlice {
  recommendedBooks: IBook[];
}

export type RequestStatusType = "idle" | "loading" | "success" | "error";
