import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getUser } from "../../store/selectors/userSelectors";
import { unsetUser } from "../../store/slices/userSlice";
import "./User.scss"

const User = () => {
  const { isAuth, email } = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(unsetUser());
  };
  if (isAuth) {
    return (
      <div className="container_user">
        <h2 >you have successfully logged!</h2>
        <h3 >
          Your email: <span>{email}</span>
        </h3>
        <div className="div__btn" onClick={handleLogOut}>
          <Button text="Log out" />
        </div>
      </div>
    );
  }
  return <Navigate to={`/${routes.SIGN_UP}`} />;
};

export default User;
