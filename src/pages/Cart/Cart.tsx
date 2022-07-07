import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CartBook from "../../components/CartBook/CartBook";
import Icon from "../../components/Icon/Icon";
import { routes } from "../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getCarts,getSumTotalCarts, getTotalCarts,getVatCarts,} from "../../store/selectors/cartSelectors";
import { getUser } from "../../store/selectors/userSelectors";
import { removeAllCart } from "../../store/slices/cartSlice";



const Cart = () => {
  const { isAuth, email } = useAppSelector(getUser);
  const carts = useAppSelector(getCarts);
  const sumTotal = useAppSelector(getSumTotalCarts);
  const vat = useAppSelector(getVatCarts);
  const total = useAppSelector(getTotalCarts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBack = () => {
    navigate(-1);
  };
  const handleCheckOut = () => {
    dispatch(removeAllCart());
  };
  if (isAuth) {
    return (
      <div  className="div__container">
        <div className="div__btn" onClick={handleBack}>
          <Icon id="back" />
        </div>
        <h1>YOUR CART</h1>
        {carts.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          carts.map((book) => <CartBook key={book.isbn13} book={book} />)
        )}
        <div className="div__checklist">
          <p className="checklist__item">
            Sum total<span>$ {sumTotal}</span>
          </p>
          <p>
            VAT<span>$ {vat}</span>
          </p>
          <h2>
            Total:<span>${total}</span>
          </h2>
          <div className="btn__checkout" onClick={handleCheckOut}>
            <Button text="check out" />
          </div>
        </div>
      </div >
    );
  }
  return <Navigate to={`/${routes.SIGN_UP}`} />;
};

export default Cart;
