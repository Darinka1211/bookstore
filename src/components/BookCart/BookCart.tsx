import React from 'react';
import { Link } from 'react-router-dom';
import './BookCart.scss';

interface IBook  {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
};
interface IBookCart {
  book: IBook;
}
export const BookCart = ({ book }: IBookCart) => {
  return (
    <Link className="--bookItem" to={'/books/' + book.isbn13}>
      <img src={book.image} alt={book.title} />
      <title className="--titleBookItem"> {book.title ? book.title : 'No title'}</title>
      <p className="numberIsbn">{book.isbn13 ? `isbn № ${book.isbn13}` : 'No isbn'} </p>
      <p className="subtitle">{book.subtitle ? book.subtitle : 'No subscription'}</p>
      <p className='price'> {book.price === "$0.00" ? "For free" : book.price}</p>
    </Link>
  );
};

export default BookCart;