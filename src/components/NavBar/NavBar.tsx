import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { routes } from '../../routes/routes';
import { getFavoriteBooks } from '../../store/selectors/favoriteBooksSelectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getCarts } from '../../store/selectors/cartSelectors';
import { ChangeEvent, useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SearchBook from '../SearchBook/SearchBook';
import { fetchNavSearchBooks } from '../../store/slices/navSearchBooksSlice';
import { getNavSearchBooks } from '../../store/selectors/navSearchBooksSelectors';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./Navbar.scss"
interface ICart {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  quantity: number;
  totalPrice: string;
}
interface IFavoriteBook {
  image: string;
  title: string;
  authors: string;
  year: string;
  price: string;
  isbn13: string;
  rating: string;
}
interface IData {
  title: string;
}
export const NavBar = () => {
  const { register, handleSubmit, reset } = useForm<IData>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const page: string = '1';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoriteBooks: IFavoriteBook[] = useAppSelector(getFavoriteBooks);
  const navSearchBooks = useAppSelector(getNavSearchBooks);
  const carts: ICart[] = useAppSelector(getCarts);
  useEffect(() => {
    dispatch(fetchNavSearchBooks({ title, page }));
  }, [title]);
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
    setTitle('');
    reset();
  };
  const handleBurgerClose = () => {
    setIsOpen(false);
  };
  const handleBurgerOpen = () => {
    setIsOpen(true);
  };
  return (
    <nav className="navigation">
      <BurgerMenu handleBurgerClose={handleBurgerClose} isOpen={isOpen} />
      <NavLink to={routes.HOME}>
        <Icon id="logo" />
      </NavLink>

      <div className="div__search">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Search"
            type="text"
            {...register('title', {
              value: title,
              onChange: (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
            })}
          />
          <button className='btn_search' type="submit">
            <Icon id="search" />
          </button>
          {title && (
            <div className="search__resault">
              <div className="search__reasault__container">
                {navSearchBooks.books.map((book) => {
                  return (
                    <div onClick={() => setTitle('')}>
                      <SearchBook key={book.isbn13} book={book} />
                    </div>
                  );
                })}
              </div>

              <button className="button__reasault">all results</button>
            </div>
          )}
        </form>
      </div>
      <div className='conteiner__nav'>
        <NavLink className="nav__favorites" to={routes.FAVORITES}>
          <Icon id="favorites" />
          {favoriteBooks.length ? (
            <div className="div__circle">
              <Icon id="red-circle" />
            </div>
          ) : (
            <></>
          )}
        </NavLink>
        <NavLink className="nav__cart" to={routes.CART}>
          <Icon id="cart" />
          {carts.length ? (
            <div className="div__circle__cart">
              <Icon id="red-circle" />
            </div>
          ) : (
            <></>
          )}
        </NavLink>
        <NavLink to={routes.ACCOUNT}>
          <Icon id="account" />
        </NavLink>
        <div className="burger__open" onClick={handleBurgerOpen}>
          <Icon id="burger-open" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
