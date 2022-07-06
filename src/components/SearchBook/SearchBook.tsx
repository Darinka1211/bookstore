import React from "react";
import { Link } from "react-router-dom";


interface IBook {
    image: string;
    isbn13: string;
    price: string;
    subtitle: string;
    title: string;
    url: string;
  }
  interface ISearhBook {
    book: IBook;
  }
  const SearchBook = ({ book }: ISearhBook) => {
    return (
      <Link to={`/books/${book.isbn13}`}>
        <div className="div_image">
          <img src={book.image} alt="#" />
        </div>
        <div className="div__title">{book.title}</div>
      </Link>
    );
  };
  
  export default SearchBook;