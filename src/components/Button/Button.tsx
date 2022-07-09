import {StyledButton} from "./styles_sass"
interface IButton  {
  text: string;
}

export const Button = ({ text }: IButton) => {
  return <StyledButton type="submit">{text} </StyledButton>;
};

export default Button;
