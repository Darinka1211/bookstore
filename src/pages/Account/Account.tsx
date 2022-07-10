import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/selector";
import { unsetUser } from "../../store/slices/userSlice";
import {
  StyledAccount,
  StyledButton,
  StyledSubtitle,
  StyledTitle,
} from "./AccountStyles";

const User = () => {
  const { isAuth, email } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(unsetUser());
  };
  if (isAuth) {
    return (
      <StyledAccount>
        <StyledTitle>ACCOUNT</StyledTitle>


      <StyledSubtitle>
        Your email: <span>{email}</span>
      </StyledSubtitle>
      <StyledButton onClick={handleLogOut}>
        <Button text="Log out" />
      </StyledButton>
    </StyledAccount>
    );
  }
  return <Navigate to={`/${routes.SIGN_UP}`} />;
};

export default User;
