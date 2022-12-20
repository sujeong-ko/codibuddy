import React from 'react';
import logo from '../../assets/codibuddy-resize.png';
import { useNavigate } from 'react-router-dom';
import { MyHeader, Logo, NavButton } from './Header.styles.jsx';

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

export default Header;
