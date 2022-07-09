import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeCart, updateQuantity } from '../../store/slices/cartSlice';
import ButtonCancel from '../ButtonCancel/Buttoncancel';
import Icon from '../Icon/Icon';
import {
  StyledBookInfo,
  StyledCartBook,
  StyledImage,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledRemoveCartButton,
  StyledButton,
  StyledQuantity,
} from "./styles_sass";

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
    <StyledCartBook>
      <StyledImage to={"/books/" + book.isbn13}>
        <img src={book.image} alt={book.image} />
      </StyledImage>
      <StyledBookInfo>
        <StyledTitle>{book.title}</StyledTitle>
        <StyledText>
          by {book.authors}, {book.year}
        </StyledText>
        <StyledText>isbn № {book.isbn13}</StyledText>
        <StyledQuantity>
          <StyledButton onClick={handleMinus}>
            <Icon id="minus" />
          </StyledButton>
          {quantity}
          <StyledButton onClick={handlePlus}>
            <Icon id="plus" />
          </StyledButton>
        </StyledQuantity>
      </StyledBookInfo>
      <StyledPrice>${book.totalPrice}</StyledPrice>
      <StyledRemoveCartButton onClick={handleRemoveCart}>
        <ButtonCancel/>
      </StyledRemoveCartButton>
    </StyledCartBook>
  );
};


export default CartBook;
