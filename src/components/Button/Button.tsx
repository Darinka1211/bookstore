import React from 'react';

import {StyledButton} from "./styles_sass"
type Button = {
  text: string;
}

export const Button = ({ text }: Button) => {
  return <StyledButton type="submit">{text} </StyledButton>;
};

export default Button;
