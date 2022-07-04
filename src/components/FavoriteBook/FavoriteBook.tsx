import React from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeFavorite } from '../../store/slices/favoriteBooksSlice';
import Icon from '../Icon/Icon';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import './FavoriteBook.scss';

interface IFavoriteBook {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  rating: string;
}
interface IBook {
  book: IFavoriteBook;
}
const FavoriteBook = ({ book }: IBook) => {
  const dispatch = useAppDispatch();
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(book));
  };
  return (
    <div className="favoriteBook">
      <Link to={'/books/' + book.isbn13}>
        {' '}
        <img src={book.image} alt={book.image} /> /
      </Link>
      <div className="bookInfo">
        <h3 className="">{book.title}</h3>
        <p>
          {' '}
          by {book.authors}, {book.year}{' '}
        </p>
        <h2>
          {book.price}
          <div className="stars">
            <StarRating rating={Number(book.rating)} />
          </div>
        </h2>
      </div>
      <button className="remove--button" onClick={handleRemoveFavorite}>
        <Icon id="favorites" />
      </button>
    </div>
  );
};
export default FavoriteBook;
