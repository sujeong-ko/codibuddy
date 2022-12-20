import React from 'react';
import logo from '../../assets/codibuddy-resize.png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyHeader, Logo, NavButton } from './Header.styles.jsx';
import modalSlice from '../../redux/modalSlice.jsx';

const LoginButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => {
    return state.modal.isOpen;
  });
  return (
    <button
      onClick={() => {
        dispatch(modalSlice.actions.change(!isOpen));
      }}>
      로그인
    </button>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const GuestNav = () => {
    return (
      <>
        <LoginButton />
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
      <Logo src={logo} alt='코디버디 로고' onClick={goToHome} />
      <nav>
        <GuestNav />
        {/* <MemberNav /> */}
      </nav>
    </MyHeader>
  );
};

export default Header;
