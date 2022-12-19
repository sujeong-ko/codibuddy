import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ text, type, onClick }) => {
  const btnType = ['cancle', 'remove'].includes(type) ? type : 'basic';
  return (
    <MyButton type={btnType} onClick={onClick}>
      {text}
    </MyButton>
  );
};

export default Button;

const BasicButton = css`
  background-color: #52b4d0;
  color: white;
`;
const CancleButton = css`
  border: 1px solid #667288;
  color: #667288;
`;

const MyButton = styled.button`
  padding: 15px;
  margin: 10px 0 10px 15px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  ${({ type }) => type === 'cancle' && CancleButton}
  ${({ type }) => type === 'basic' && BasicButton}
`;
