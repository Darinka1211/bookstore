import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getUser } from '../../store/selectors/selector';
import { unsetUser } from '../../store/slices/userSlice';
import Button from '../Button/Button';
import ButtonCancel from '../ButtonCancel/Buttoncancel';
import Icon from '../Icon/Icon';
import {
  StyledButton,
  StyledClose,
  StyledCloseContainer,
  StyledLink,
  StyledMenu,
  StyledMenuContainer,
  StyledMenuNav,
  StyledSearch,
  StyledInput,
} from './styles_sass';
interface IData {
  title: string;
}
interface IMenu {
  handleClose: () => void;
  isOpen: boolean;
}
export const Menu = ({ handleClose, isOpen }: IMenu) => {
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
    <StyledMenu open={isOpen}>
      <StyledMenuContainer>
        <StyledMenuNav>
          <StyledCloseContainer>
            <StyledClose onClick={handleClose}>
              <ButtonCancel />
            </StyledClose>
          </StyledCloseContainer>
          <StyledSearch>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledInput placeholder="Search" type="text" {...register('title')} />
              <Icon id="search" />
            </form>
          </StyledSearch>
          {isAuth && <StyledLink to={`/${routes.FAVORITES}`}>FAVORITES</StyledLink>}
          {isAuth && <StyledLink to={`/${routes.CART}`}>CART</StyledLink>}
          <StyledButton onClick={handleAuth}>
            <Button text={isAuth ? 'LOG OUT' : 'SIGN IN'} />
          </StyledButton>
        </StyledMenuNav>
      </StyledMenuContainer>
    </StyledMenu>
  );
};

export default Menu;
