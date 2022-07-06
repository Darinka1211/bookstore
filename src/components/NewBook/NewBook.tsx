import React from "react";
import { useEffect } from "react";
import {BookCart} from "../BookCart/BookCart"
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {getNewBooks,getNewBooksStatus,} from "../../store/selectors/newBooksSelectors";
import { fetchNewBooks } from "../../store/slices/newBooksSlice";
import Loading from "../Loading/Loading";

const NewBooks = () => {
    const newBooks = useAppSelector(getNewBooks);
    const status = useAppSelector(getNewBooksStatus);
  
    const dispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchNewBooks());
    }, [dispatch]);
  
    if (status === "loading") {
      return <Loading />;
    }
    if (status === "error") {
      return <div>Error: </div>;
    }
  
    return (
      <div className="new-book">
        <h1>NEW RELEASES BOOKS</h1>
        <ul className="list-group">
          {newBooks.books.map((book)=> {
            return <BookCart key={book.isbn13} book={book} />;
          })}
        </ul>
      </div>
    );
  };
  
  export default NewBooks;
  