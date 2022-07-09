import React from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeFavorite } from '../../store/slices/favoriteBooksSlice';
import Icon from '../Icon/Icon';
import StarRating from '../StarRating/StarRating';
import { Link } from 'react-router-dom';
import {
  StyledBookInfo,
  StyledFavoriteBook,
  StyledImage,
  StyledPrice,
  StyledRaiting,
  StyledText,
  StyledTitle,
  StyledRemoveButton,
} from "./styles_sass";

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
    <StyledFavoriteBook>
     <StyledImage to={"/books/" + book.isbn13}>
        <img src={book.image} alt={book.image} />
      </StyledImage>
      <StyledBookInfo>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledText>
          by {book.authors}, {book.year}
        </StyledText>
        <StyledPrice>
          {book.price}
          <StyledRaiting>
            <StarRating rating={Number(book.rating)} />
          </StyledRaiting>
        </StyledPrice>
      </StyledBookInfo>
      <StyledRemoveButton onClick={handleRemoveFavorite}>
        <Icon id="favorites" />
      </StyledRemoveButton>
    </StyledFavoriteBook>
  );
};
export default FavoriteBook;
