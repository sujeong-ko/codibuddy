import styled, { css } from 'styled-components';
import tw from 'tailwind-styled-components';

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
  margin: 15px 0 10px 10px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  ${({ type }) => type === 'cancle' && CancleButton}
  ${({ type }) => type === 'basic' && BasicButton}
`;

export { BasicButton, CancleButton, MyButton };
