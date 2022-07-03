import React from 'react';
import './Button.scss';

interface IButton {
  text: string;
}

export const Button = ({ text }: IButton) => {
  return <button type="submit">{text} </button>;
};

export default Button;
