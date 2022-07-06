import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeCart, updateQuantity } from '../../store/slices/cartSlice';
import ButtonCancel from '../ButtonCancel/Buttoncancel';
import Icon from '../Icon/Icon';

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
interface ICartBook {
  book: ICart;
}

const CartBook = ({ book }: ICartBook) => {
  const [quantity, setQuantity] = useState(book.quantity);
  const dispatch = useAppDispatch();
  const increaseQuantity = (n = 1) => {
    const value = Number(quantity) + n;
    const isbn13 = book.isbn13;
    if (Number.isInteger(value) && value >= 1) {
      setQuantity(value);
      const payload = { isbn13, value };
      dispatch(updateQuantity(payload));
    }
  };
  const handleMinus = () => {
    increaseQuantity(-1);
  };

  const handlePlus = () => {
    increaseQuantity(+1);
  };

  const handleRemoveCart = () => {
    dispatch(removeCart(book));
  };
  return (
    <div className="cart-book">
      <Link className="link__book" to={'/books/' + book.isbn13}>
        <img src={book.image} alt={book.image} />
      </Link>
      <div className="book__info">
        <h3>{book.title}</h3>
        <p>
          by {book.authors}, {book.year}
        </p>
        <p>isbn № {book.isbn13}</p>
        <div className="quantity">
          <button onClick={handleMinus}>
            <Icon id="minus" />
          </button>
          {quantity}
          <button onClick={handlePlus}>
            <Icon id="plus" />
          </button>
        </div>
      </div>
      <h2>${book.totalPrice}</h2>
      <button className="remove__cart__button" onClick={handleRemoveCart}>
        <ButtonCancel />
      </button>
    </div>
  );
};

export default CartBook;
