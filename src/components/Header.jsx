import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import logo from '../assets/logo192.png';

const Header = () => {
  const GuestNav = () => {
    return (
      <>
        <button>로그인</button>
        <button>회원가입</button>
      </>
    );
  };
  return (
    <MyHeader>
      <Logo src={logo} />
      <Nav>
        <GuestNav />
      </Nav>
    </MyHeader>
  );
};

const MyHeader = tw.header`
h-16
p-3
border
flex
items-center
`;

const Logo = styled.img`
  height: 3rem;
`;

const Nav = tw.nav`
`;

export default Header;
