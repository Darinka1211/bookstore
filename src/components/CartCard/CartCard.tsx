import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { removeCart, updateQuantity } from '../../store/slices/cartSlice';
import ButtonCancel from '../ButtonCancel/Buttoncancel';
import Icon from '../Icon/Icon';
import {
  StyledBookInfo,
  StyledCartCard,
  StyledImage,
  StyledPrice,
  StyledText,
  StyledTitle,
  StyledRemoveCartButton,
  StyledButton,
  StyledQuantity,
} from "./CartCardStyles";

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
interface ICartCard {
  book: ICart;
}

const CartCard = ({ book }: ICartCard) => {
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
    <StyledCartCard>
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
    </StyledCartCard>
  );
};


export default CartCard;
