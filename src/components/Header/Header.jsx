import React from 'react';
import logo from '../../assets/codibuddy-resize.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MyHeader, Logo, NavButton } from './Header.styles.jsx';
import modalSlice from '../../redux/modalSlice.jsx';

const LoginButton = () => {
  const dispatch = useDispatch();
  return (
    <NavButton
      onClick={() => {
        dispatch(modalSlice.actions.loginToggle());
      }}>
      로그인
    </NavButton>
  );
};

const RegisterButton = () => {
  const dispatch = useDispatch();
  return (
    <NavButton
      onClick={() => {
        dispatch(modalSlice.actions.registerToggle());
      }}>
      회원가입
    </NavButton>
  );
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
      <NavButton>
        <Link to='/new'>새 글 쓰기</Link>
      </NavButton>
      <NavButton>
        <Link to='/mypage'>마이페이지</Link>
      </NavButton>
    </>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.isLogged);
  const goToHome = () => {
    navigate('/');
  };

  return (
    <MyHeader>
      <Logo src={logo} alt='코디버디 로고' onClick={goToHome} />
      <nav>{isLogged ? <MemberNav /> : <GuestNav />}</nav>
    </MyHeader>
  );
};

export default Header;
