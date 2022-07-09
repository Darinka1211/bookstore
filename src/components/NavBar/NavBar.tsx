import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { routes } from '../../routes/routes';
import { getFavoriteBooks,getNavSearchBooks } from '../../store/selectors/selector';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getCarts } from '../../store/selectors/selector';
import { ChangeEvent, useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import SearchBook from '../SearchBook/SearchBook';
import { fetchNavSearchBooks } from '../../store/slices/navSearchBooksSlice';


import {
  StyledAccount,
  StyledAllResultsButton,
  StyledOpen,
  StyledCart,
  StyledCartCircle,
  StyledContainer,
  StyledFavoriteCircle,
  StyledFavorites,
  StyledInput,
  StyledLogo,
  StyledNavbar,
  StyledSearch,
  StyledSearchButton,
  StyledSearchResult,
  StyledSearchResultContainer,
} from './NavBarStyles';
type Cart = {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  quantity: number;
  totalPrice: string;
};
type FavoriteBook = {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  rating: string;
};
type Data = {
  title: string;
};
export const NavBar = () => {
  const { register, handleSubmit, reset } = useForm<Data>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const page: string = '1';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteBooks: FavoriteBook[] = useAppSelector(getFavoriteBooks);
  const navSearchBooks = useAppSelector(getNavSearchBooks);
  const carts: Cart[] = useAppSelector(getCarts);
  useEffect(() => {
    dispatch(fetchNavSearchBooks({ title, page }));
  }, [title]);
  const onSubmit = (data: Data) => {
    navigate(`search/${data.title}/1`);
    setTitle('');
    reset();
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <StyledNavbar>
      <Menu handleClose={handleClose} isOpen={isOpen} />
      <StyledLogo to={routes.HOME}>
        <Icon id="logo" />
      </StyledLogo>
      <StyledSearch>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="Search"
            type="text"
            {...register('title', {
              value: title,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
            })}
          />
          <StyledSearchButton type="submit">
            <Icon id="search" />
          </StyledSearchButton>
          {title && (
            <StyledSearchResult>
              <StyledSearchResultContainer>
                {navSearchBooks.books.map((book) => {
                  return (
                    <div onClick={() => setTitle('')}>
                      <SearchBook key={book.isbn13} book={book} />
                    </div>
                  );
                })}
              </StyledSearchResultContainer>

              <StyledAllResultsButton>all results</StyledAllResultsButton>
            </StyledSearchResult>
          )}
        </form>
      </StyledSearch>
      <StyledContainer>
        <StyledFavorites to={routes.FAVORITES}>
          <Icon id="favorites" />
          {favoriteBooks.length ? (
            <StyledFavoriteCircle>
              <Icon id="red-circle" />
            </StyledFavoriteCircle>
          ) : (
            <></>
          )}
        </StyledFavorites>
        <StyledCart to={routes.CART}>
          <Icon id="cart" />
          {carts.length ? (
            <StyledCartCircle>
              <Icon id="red-circle" />
            </StyledCartCircle>
          ) : (
            <></>
          )}
        </StyledCart>
        <StyledAccount to={routes.ACCOUNT}>
          <Icon id="account" />
        </StyledAccount>
        <StyledOpen onClick={handleOpen}>
          <Icon id="-open" />
        </StyledOpen>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default NavBar;
