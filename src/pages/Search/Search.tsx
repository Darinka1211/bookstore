import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookCart from "../../components/BookCart/BookCart";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import {
  getSearchBooks,
  getSearchBooksStatus,
  getSearchBooksTotalPage,
} from "../../store/selectors/searchBooksSelectors";
import {
  fetchSearchBooks,
  setCurrentPage,
} from "../../store/slices/searchBooksSlice";


const Search = () => {
  const { title = "", page = "" } = useParams();
  const navigate = useNavigate();

  const searchBooks = useAppSelector(getSearchBooks);
  const status = useAppSelector(getSearchBooksStatus);
  const totalPage = useAppSelector(getSearchBooksTotalPage);

  const dispatch = useAppDispatch();

  const handlePage = (item: number) => {
    navigate(`/search/${title}/${item}`);
  };

  const handleNextPage = () => {
    if (Number(page) === totalPage) {
      return;
    }
    navigate(`/search/${title}/${Number(page) + 1}`);
  };

  const handlePrevPage = () => {
    if (Number(page) === 1) {
      return;
    }
    navigate(`/search/${title}/${Number(page) - 1}`);
  };

  useEffect(() => {
    dispatch(fetchSearchBooks({ title, page }));
    dispatch(setCurrentPage(Number(page)));
  }, [dispatch, title, page]);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <div>Error: </div>;
  }
  return (
    <div className="div__search">
      <h1>‘{title}’ SEARCH RESULTS</h1>
      <h3>Found {searchBooks?.total} books</h3>
      <ul>
        {searchBooks.books.map((book) => {
          return <BookCart key={book.isbn13} book={book} />;
        })}
      </ul>
      <Pagination
        handlePrevPage={handlePrevPage}
        handlePage={handlePage}
        handleNextPage={handleNextPage}
        totalPage={totalPage}
      />
      
    </div>
  );
};

export default Search;
