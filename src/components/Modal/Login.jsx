import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';

const Login = () => {
  // state = {
  //   email: '',
  //   password: '',
  // };

  // const loginHandler = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // ////계산된 속성명 사용

  // const loginClickHandler = () => {
  //   const { email, password } = this.state;
  //   fetch('http://10.58.2.17:8000/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  return (
    <>
      {/* // isOpen ?
    ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
    /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
    ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
    ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
    /// true인 상태로 있어서 화면이 안꺼진다. */}

      <S.ModalMain>
        <div
        // onClick={close}
        >
          <S.ModalDiv>
            <S.Close
            // onClick={close}
            >
              &times;
            </S.Close>
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
                <S.LoginLine>
                  회원이 아니신가요? <Link to='/register'>회원가입</Link>
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
