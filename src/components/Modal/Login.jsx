import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';
import { useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';
import axios from 'axios';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    user_id: '',
    pw: '',
  });
  const dispatch = useDispatch();
  const close = () => {
    dispatch(modalSlice.actions.loginToggle());
  };
  const userIdHandler = (e) =>
    setLoginInfo({ ...loginInfo, user_id: e.target.value });
  const pwHandler = (e) => setLoginInfo({ ...loginInfo, pw: e.target.value });
  const submitHandler = async () => {
    try {
      const { data } = await axios.post('api/users/login', loginInfo);
      localStorage.setItem('token', data.token);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    dispatch(modalSlice.actions.loginToggle());
  };
  return (
    <>
      <S.ModalMain>
        <S.ModalDiv>
          <S.Close onClick={close}>&times;</S.Close>
          <S.ModalContents>
            <S.ModalTitle>로그인</S.ModalTitle>
            <S.TitleText>ID</S.TitleText>
            <S.Input
              className='loginId'
              type='text'
              placeholder='아이디'
              value={loginInfo.user_id}
              onChange={userIdHandler}
            />
            <S.TitleText>Password</S.TitleText>
            <S.Input
              className='loginPw'
              type='password'
              placeholder='비밀번호'
              value={loginInfo.pw}
              onChange={pwHandler}
            />
            <S.ModalBtn onClick={submitHandler}> LOGIN </S.ModalBtn>
            <S.LoginEnd>
              <S.LoginLine
                onClick={() => {
                  dispatch(modalSlice.actions.loginToggle());
                  dispatch(modalSlice.actions.registerToggle());
                }}>
                회원이 아니신가요? <span>회원가입</span>
              </S.LoginLine>
            </S.LoginEnd>
          </S.ModalContents>
        </S.ModalDiv>
      </S.ModalMain>
    </>
  );
};

export default Login;
