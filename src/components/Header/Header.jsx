import React from 'react';
import logo from '../../assets/codibuddy-resize.png';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyHeader, Logo, NavButton } from './Header.styles.jsx';
import modalSlice from '../../redux/modalSlice.jsx';

const LoginButton = () => {
  const dispatch = useDispatch();
  const loginIsOpen = useSelector((state) => {
    return state.modal.loginIsOpen;
  });
  return (
    <button
      onClick={() => {
        dispatch(modalSlice.actions.loginToggle(!loginIsOpen));
      }}>
      로그인
    </button>
  );
};

const RegisterButton = () => {
  const dispatch = useDispatch();
  const registerIsOpen = useSelector((state) => {
    return state.modal.registerIsOpen;
  });
  return (
    <button
      onClick={() => {
        dispatch(modalSlice.actions.registerToggle(!registerIsOpen));
      }}>
      회원가입
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
        <RegisterButton />
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
