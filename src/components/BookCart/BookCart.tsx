import React from 'react';
import { Link } from 'react-router-dom';
import './BookICart.scss';

type Book = {
  image: string;
  number: string;
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
    <Link className="--bookItem" to={'/books/' + book.number}>
      <img src={book.image} alt={book.title} />
      <title className="--titleBookItem"> {book.title ? book.title : 'No title'}</title>
      <p className="numberIsbn">{book.number ? `isbn № ${book.number}` : 'No isbn'} </p>
      <p className="subtitle">{book.subtitle ? book.subtitle : 'No subscription'}</p>
      <p className='price'> {book.price === "$0.00" ? "For free" : book.price}</p>
    </Link>
  );
};
