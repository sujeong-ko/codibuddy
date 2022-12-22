import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';
import { useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';

const Login = () => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(modalSlice.actions.loginToggle());
  };

  return (
    <>
      <S.ModalMain>
        <div
        // onClick={close}
        >
          <S.ModalDiv>
            <S.Close onClick={close}>&times;</S.Close>
            <S.ModalContents
            // onClick={isOpen}
            >
              <S.ModalTitle>로그인</S.ModalTitle>
              <S.TitleText>ID</S.TitleText>
              <S.Input
                name='email'
                className='loginId'
                type='text'
                placeholder='아이디'
                // onChange={this.loginHandler}
              />
              <S.TitleText>Password</S.TitleText>
              <S.Input
                name='password'
                className='loginPw'
                type='password'
                placeholder='비밀번호'
                // onChange={this.loginHandler}
              />
              {/* <div className='loginMid'>
                <label className='autoLogin' htmlFor='hint'>
                  {' '}
                  <input type='checkbox' id='hint' /> 로그인 유지하기
                </label>
                <div className='autoLogin'>아이디/비밀번호 찾기</div>
              </div> */}
              <S.ModalBtn
              // onClick={this.loginClickHandler}
              >
                {' '}
                LOGIN{' '}
              </S.ModalBtn>
              {/* <div className='socialBox'>
                <div className='kakao'>
                  <img
                    className='kakaoLogo'
                    src='/Images/SignIn/kakao.png'
                  />
                  <div className='kakaoText'>카카오 계정으로 신규가입</div>
                </div>
                <div className='facebook'>
                  <img
                    className='facebookLogo'
                    src='/Images/SignIn/facebook.png'
                  />
                  <div className='facebookText'>
                    페이스북 계정으로 신규가입
                  </div>
                </div>
              </div> */}
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
        </div>
      </S.ModalMain>
    </>
  );
};

export default Login;
