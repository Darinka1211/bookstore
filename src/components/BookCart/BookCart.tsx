
import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledBookItem,
  StyledImg,
  StyledIsbn,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from './styles_sass';

type Book = {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
};
interface IBookCart {
  book: Book;
}
export const BookCart = ({ book }: IBookCart) => {
  return (
    <StyledBookItem to={'/books/' + book.isbn13}>
      <StyledImg src={book.image} alt={book.title} />
      <StyledTitle>{book.title ? book.title : 'No title'}</StyledTitle>
      <StyledIsbn>{book.isbn13 ? `isbn № ${book.isbn13}` : 'No isbn'}</StyledIsbn>
      <StyledSubtitle>{book.subtitle ? book.subtitle : 'No subscription'}</StyledSubtitle>
      <StyledPrice>{book.price === '$0.00' ? 'For free' : book.price}</StyledPrice>
    </StyledBookItem>
  );
};

export default BookCart;
