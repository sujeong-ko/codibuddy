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
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </>
    );
  };

  const MemberNav = () => {
    return (
      <>
        <Button>새 글 쓰기</Button>
        <Button>마이페이지</Button>
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
border
flex
justify-between
items-center
`;

const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;

const Button = tw.button`
ml-3
`;

export default Header;
