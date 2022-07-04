import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/userSelectors';
import { unsetUser } from '../../store/slices/userSlice';
import Button from '../Button/Button';
import ButtonCancel from '../ButtonCancel/Buttoncancel';
import Icon from '../Icon/Icon';
interface IData {
  title: string;
}
interface IBurgerMenu {
  handleBurgerClose: () => void;
  isOpen: boolean;
}
 export const BurgerMenu = ({ handleBurgerClose, isOpen }: IBurgerMenu) => {
  const { isAuth } = useAppSelector(getUser);
  const { register, handleSubmit } = useForm<IData>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit = (data: IData) => {
    navigate(`search/${data.title}/1`);
  };
  
  const handleAuth = () => {
    if (isAuth) {
      dispatch(unsetUser());
    } else {
      navigate(`/${routes.SIGN_IN}`);
    }
  };
  return (
    <div className="--openMenu">
      {' '}
      open={isOpen}
      <div className="bm__container">
        <div className="bm__nav">
          <div className="bm__close-container">
            <div className="bm__close">
              <ButtonCancel />
            </div>
          </div>
          <div className="search">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className="input" placeholder="Search" type="text" {...register('title')} />
            </form>
          </div>
          {isAuth && <Link to={`/${routes.FAVORITES}`}>FAVORITES</Link>}
          {isAuth && <Link to={`/${routes.CART}`}>CART</Link>}

          <div className="bm__button" onClick={handleAuth}>
            <Button text={isAuth ? 'LOG OUT' : 'SIGN IN'} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BurgerMenu;