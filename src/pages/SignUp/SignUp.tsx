import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import {
  getAuth,
  createUserWithEmailAndPassword,
  EmailAuthCredential,
} from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useState } from "react";

interface ISignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    mode: "onChange",
  });
  const onSubmit = (data: ISignUp) => {
    if (data.password === data.confirmPassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential: { user: { email: any; }; }) => {
        dispatch(setUser(userCredential.user.email));
          navigate(`/${routes.ACCOUNT}`);
        })
        .catch((error: any) => {
          setError("Sorry, that email address is already used!");
        });
    } else {
      setError("Password and confirm password does not match!");
    }
  };
  return (
    <div className="div__sign">
      <div className="div__tabs">
        <div className="div__tab" onClick={() => navigate(`/${routes.SIGN_IN}`)}>
          SIGN IN
        </div>
        <div className="div__tab">SIGN UP</div>
      </div>
      <form className="div__form" onSubmit={handleSubmit(onSubmit)}>
        {error && <div className="error">{error}</div>}
        <div className="div__container">
          <label className="label__email" htmlFor="email">Email</label>
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
        <div className="div__container">
          <label className="label__email" htmlFor="password">Password</label>
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
        <div className="div__container">
          <label className="label__email" htmlFor="confirmPassword">Confirm password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm password is require field!",
              minLength: {
                value: 6,
                message: "Minimum 8 characters!",
              },
            })}
            placeholder="Confirm your password"
            id="confirmPassword"
            type="password"
          />
          {errors?.confirmPassword && (
            <label className="label__error">
              {errors?.confirmPassword?.message || "Error"}
            </label>
          )}
        </div>
        <Button text="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;
