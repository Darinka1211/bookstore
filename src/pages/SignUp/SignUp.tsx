import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { routes } from "../../routes/routes";
import {getAuth,createUserWithEmailAndPassword,EmailAuthCredential} from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { useState } from "react";
import {
  StyledContainer,
  StyledError,
  StyledErrorLabel,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSign,
  StyledTab,
  StyledTabs,
} from "./styles_sass";
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
    <StyledSign>
    <StyledTabs>
      <StyledTab onClick={() => navigate(`/${routes.SIGN_IN}`)}>
        SIGN IN
      </StyledTab>
      <StyledTab>SIGN UP</StyledTab>
    </StyledTabs>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {error && <StyledError>{error}</StyledError>}
      <StyledContainer>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
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
          <StyledErrorLabel>
            {errors?.email?.message || "Error"}
          </StyledErrorLabel>
        )}
      </StyledContainer>
      <StyledContainer>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput
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
          <StyledErrorLabel>
            {errors?.password?.message || "Error"}
          </StyledErrorLabel>
        )}
      </StyledContainer>
      <StyledContainer>
        <StyledLabel htmlFor="confirmPassword">Confirm password</StyledLabel>
        <StyledInput
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
          <StyledErrorLabel>
            {errors?.confirmPassword?.message || "Error"}
          </StyledErrorLabel>
        )}
      </StyledContainer>
      <Button text="SIGN UP" />
    </StyledForm>
  </StyledSign>
);
};


export default SignUp;
