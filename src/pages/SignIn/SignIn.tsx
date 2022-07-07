import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import "./SignIn.scss"

interface ISignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    mode: "onChange",
  });
  const onSubmit = (data: ISignIn) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential: { user: { email: any; }; }) => {
        dispatch(setUser(userCredential.user.email));
        navigate(`/${routes.ACCOUNT}`);
      })
      .catch((error: { code: any; }) => {
        const errorCode = error.code;

        if (errorCode === "auth/wrong-password") {
          setError("The password you entered is incorrect! Please try again.");
        }
        if (errorCode === "auth/user-not-found") {
          setError("The email you entered is incorrect! Please try again.");
        }
      });
  };
  return (
    <div className="div__signIn__container">
      <div className="div__tabs">
        <div className="tab">SIGN IN</div>
        <div className="tab"  onClick={() => navigate(`/${routes.SIGN_UP}`)}>
          SIGN UP
        </div>
      </div>
      <form className="form__onsubmit" onSubmit={handleSubmit(onSubmit)}>
        {error && <div className="div__error">{error}</div>}
        <div className="label__email">
          <label className="ladel__form" htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Email is require field!",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter valid email!",
              },
            })}
            placeholder="Your email"
            id="email"
          />
          {errors?.email && (
            <label className="label__error">
              {errors?.email?.message || "Error"}
            </label>
          )}
        </div>
        <div className="label__email">
          <label className="ladel__form" htmlFor="password">Password</label>
          <input
            {...register("password", {
              required: "Password is require field!",
              minLength: {
                value: 6,
                message: "Minimum 8 characters!",
              },
            })}
            placeholder="Your password"
            id="password"
            type="password"
          />
          {errors?.password && (
            <label className="label__error">
              {errors?.password?.message || "Error"}
            </label>
          )}
        </div>
        <Button text="SIGN IN" />
      </form>
    </div>
  );
};

export default SignIn;
