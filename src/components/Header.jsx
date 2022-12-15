import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import logo from '../assets/logo192.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const GuestNav = () => {
    return (
      <>
        <NavButton>로그인</NavButton>
        <NavButton>회원가입</NavButton>
      </>
    );
  };

  const MemberNav = () => {
    return (
      <>
        <NavButton>새 글 쓰기</NavButton>
        <NavButton>마이페이지</NavButton>
      </>
    );
  };
  return (
    <MyHeader>
      <Logo src={logo} onClick={goToHome} />
      <nav>
        <GuestNav />
        {/* <MemberNav /> */}
      </nav>
    </MyHeader>
  );
};

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

export default Header;
