import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';

const Register = () => {
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

        <S.ModalMain>
          <div
          // onClick={close}
          >
            <S.ModalDiv>
              <S.Close onClick={close}>&times;</S.Close>
              <S.ModalContents
              // onClick={isOpen}
              >
                <S.ModalTitle>회원가입</S.ModalTitle>
                <S.TitleText id='IDtext'>ID</S.TitleText>
                <S.Input
                  name='ID'
                  className='input'
                  id='idInput'
                  type='text'
                  placeholder='아이디'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='PWtext'>Password</S.TitleText>
                <S.Input
                  name='password'
                  className='input'
                  id='passwordInput'
                  type='password'
                  placeholder='비밀번호'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='PWChecktext'>Password Check</S.TitleText>
                <S.Input
                  name='PWcheck'
                  className='input'
                  id='PWCheckInput'
                  type='password'
                  placeholder='비밀번호 확인'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='nicktext'>Nickname</S.TitleText>
                <S.Input
                  name='nickname'
                  className='input'
                  id='nicknameInput'
                  type='text'
                  placeholder='닉네임'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='emailtext'>Email</S.TitleText>
                <S.Input
                  name='email'
                  className='input'
                  id='emailInput'
                  type='email'
                  placeholder='123@xxxx.com'
                  // onChange={this.loginHandler}
                />

                <S.ModalBtn
                // onClick={this.loginClickHandler}
                >
                  {' '}
                  회원가입{' '}
                </S.ModalBtn>
              </S.ModalContents>
            </S.ModalDiv>
          </div>
        </S.ModalMain>
      }
    </>
  );
};

export default Register;
