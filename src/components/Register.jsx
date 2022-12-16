import React, { Component } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
  // state = {
  //   email: "",
  //   password: "",
  // };

  // loginHandler = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };   ////계산된 속성명 사용

  // loginClickHandler = () => {
  //   const { email, password } = this.state;
  //   fetch("http://10.58.2.17:8000/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  render() {
    // const { isOpen, close } = this.props;   //아까 버튼에서 props로 가져온것
    return (
      <>
        {
          // isOpen ?
          ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
          /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
          ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
          ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
          /// true인 상태로 있어서 화면이 안꺼진다.

          <ModalMain>
            <div
            // onClick={close}
            >
              <div className='RegisterModal'>
                <span
                  className='close'
                  // onClick={close}
                >
                  &times;
                </span>
                <div
                  className='modalContents'
                  // onClick={isOpen}
                >
                  <div className='RegisterTitle'>회원가입</div>
                  <div className='titleText' id='IDtext'>
                    ID
                  </div>
                  <input
                    name='ID'
                    className='input'
                    id='idInput'
                    type='text'
                    placeholder='아이디'
                    onChange={this.loginHandler}
                  />

                  <div className='titleText' id='PWtext'>
                    Password
                  </div>
                  <input
                    name='password'
                    className='input'
                    id='passwordInput'
                    type='password'
                    placeholder='비밀번호'
                    onChange={this.loginHandler}
                  />

                  <div className='titleText' id='PWChecktext'>
                    Password Check
                  </div>
                  <input
                    name='PWcheck'
                    className='input'
                    id='PWCheckInput'
                    type='password'
                    placeholder='비밀번호 확인'
                    onChange={this.loginHandler}
                  />

                  <div className='titleText' id='nicktext'>
                    Nickname
                  </div>
                  <input
                    name='nickname'
                    className='input'
                    id='nicknameInput'
                    type='text'
                    placeholder='닉네임'
                    onChange={this.loginHandler}
                  />

                  <div className='titleText' id='emailtext'>
                    Email
                  </div>
                  <input
                    name='email'
                    className='input'
                    id='emailInput'
                    type='email'
                    placeholder='123@xxxx.com'
                    onChange={this.loginHandler}
                  />

                  {/* <div className='loginMid'>
                    <label className='autoLogin' htmlFor='hint'>
                      {' '}
                      <input type='checkbox' id='hint' /> 로그인 유지하기
                    </label>
                    <div className='autoLogin'>아이디/비밀번호 찾기</div>
                  </div> */}
                  <button
                    className='RegisterBtn'
                    onClick={this.loginClickHandler}>
                    {' '}
                    회원가입{' '}
                  </button>
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
                </div>
              </div>
            </div>
          </ModalMain>
          // : null
        }
      </>
    );
  }
}

const ModalMain = tw.div`
fixed top-0 left-0 right-0
bg-gray-500/50
`;

export default Register;
