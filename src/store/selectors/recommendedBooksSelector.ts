import { RootState } from "../store";

export const getRecommendedBooks = (state: RootState) => state.recommendedBooks.recommendedBooks;
