import React from "react";
import NewBooks from "../../components/NewBook/NewBook";
import BookSlider from "../../components/BookSlider/BookSlider";
import { useAppSelector } from "../../store/hooks/hooks";
import { getRecommendedBooks } from "../../store/selectors/recommendedBooksSelector";

import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  const recommendedBooks = useAppSelector(getRecommendedBooks);
  return (
    <div>
      <h1>Recommended Books</h1>
      <BookSlider books={recommendedBooks} />
      <NewBooks />
      <Subscribe />
    </div>
  );
};

export default Home;