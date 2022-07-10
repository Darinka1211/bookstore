import { StyledSearchBook, StyledImage, StyledTitle } from "./SearchBookStyle"


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
      <StyledSearchBook to={`/books/${book.isbn13}`}>
        <StyledImage>
          <img src={book.image} alt="#" />
        </StyledImage>
        <StyledTitle>{book.title}</StyledTitle>
      </StyledSearchBook>
    );
  };
  
  export default SearchBook;