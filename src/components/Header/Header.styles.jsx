import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const MyHeader = tw.header`
w-screen
h-16
p-3
border-b
border-b-inherit
flex
justify-between
items-center
`;

const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

const NavButton = tw.button`
m-4
`;

export { MyHeader, Logo, NavButton };
