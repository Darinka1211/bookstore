import React from "react";
import "./Favorites.scss";
import { Navigate, useNavigate } from "react-router-dom";
import BooksSlider from "../../components/BookSlider/BookSlider";
import FavoriteBook from "../../components/FavoriteBook/FavoriteBook";
import Icon from "../../components/Icon/Icon";
import Subscribe from "../../components/Subscribe/Subscribe";
import { routes } from "../../routes/routes";
import { useAppSelector } from "../../store/hooks/hooks";
import { getFavoriteBooks } from "../../store/selectors/favoriteBooksSelectors";
import { getRecommendedBooks } from "../../store/selectors/recommendedBooksSelector";
import { getUser } from "../../store/selectors/userSelectors";
interface IFavoriteBook {
    image: string;
    title: string;
    authors: string;
    year: string;
    price: string;
    isbn13: string;
    rating: string;
  }
  const Favorites = () => {
    const { isAuth, email } = useAppSelector(getUser);
    const navigate = useNavigate();
    const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);
    const recommendedBooks = useAppSelector(getRecommendedBooks);
  
    const handleBack = () => {
      navigate(-1);
    };
    if (isAuth) {
      return (
        <div className="div__container__favorite">
          <div className="div__btn" onClick={handleBack}>
            <Icon id="back" />
          </div >
          <h1>FAVORITES</h1>
          {favoriteBooks.length === 0 ? (
            <p>You have not favorite books!</p>
          ) : (
            favoriteBooks.map((book) => (
              <FavoriteBook key={book.isbn13} book={book} />
            ))
          )}
          <h2>Recommended Books</h2>
          <BooksSlider books={recommendedBooks} />
        </div>
      );
    }
    return <Navigate to={`/${routes.SIGN_UP}`} />;
  };
  
  export default Favorites;