import React from 'react';
import { MyButton } from './Button.styles.jsx';

const Button = ({ text, type, onClick }) => {
  const btnType = ['cancle', 'remove'].includes(type) ? type : 'basic';
  return (
    <MyButton type={btnType} onClick={onClick}>
      {text}
    </MyButton>
  );
};

export default Button;
