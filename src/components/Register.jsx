import React from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

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

        <ModalMain>
          <div
          // onClick={close}
          >
            <RegisterModal>
              <Close onClick={close}>&times;</Close>
              <ModalContents
              // onClick={isOpen}
              >
                <RegisterTitle>회원가입</RegisterTitle>
                <TitleText id='IDtext'>ID</TitleText>
                <Input
                  name='ID'
                  className='input'
                  id='idInput'
                  type='text'
                  placeholder='아이디'
                  // onChange={this.loginHandler}
                />

                <TitleText id='PWtext'>Password</TitleText>
                <Input
                  name='password'
                  className='input'
                  id='passwordInput'
                  type='password'
                  placeholder='비밀번호'
                  // onChange={this.loginHandler}
                />

                <TitleText id='PWChecktext'>Password Check</TitleText>
                <Input
                  name='PWcheck'
                  className='input'
                  id='PWCheckInput'
                  type='password'
                  placeholder='비밀번호 확인'
                  // onChange={this.loginHandler}
                />

                <TitleText id='nicktext'>Nickname</TitleText>
                <Input
                  name='nickname'
                  className='input'
                  id='nicknameInput'
                  type='text'
                  placeholder='닉네임'
                  // onChange={this.loginHandler}
                />

                <TitleText id='emailtext'>Email</TitleText>
                <Input
                  name='email'
                  className='input'
                  id='emailInput'
                  type='email'
                  placeholder='123@xxxx.com'
                  // onChange={this.loginHandler}
                />

                <RegisterBtn
                // onClick={this.loginClickHandler}
                >
                  {' '}
                  회원가입{' '}
                </RegisterBtn>
              </ModalContents>
            </RegisterModal>
          </div>
        </ModalMain>
      }
    </>
  );
};

const ModalMain = tw.div`
fixed top-0 left-0 right-0
bg-gray-500/50
h-full
`;

const RegisterModal = tw.div`
w-2/5
h-5/6
bg-white
relative
box-border
mt-20
ml-auto
mb-auto
mr-auto
p-2

`;

const RegisterTitle = tw.div`
mt-1
text-lg
text-[#52b4d0]
leading-loose
text-center
`;

const Close = tw.span`
float-right
text-sm
`;

const ModalContents = tw.div`
mt-10
ml-auto
mr-auto
mb-auto
relative
pr-8
pl-8
pb-7
box-border
flex
justify-center
flex-col
`;

const Input = tw.input`
placeholder-shown:bg-slate-50
rounded-sm
w-full
h-3/5
border-1
border-[#e5e5e5]
pt-1
pb-1
pl-1
outline-0
box-border
`;

const TitleText = tw.div`
mt-2
text-base
text-black
leading-loose
`;

const RegisterBtn = tw.button`
h-3/7
text-base
pt-2
pb-2
cursor-pointer
bg-[#52b4d0]
text-white
leading-loose
mt-10
mb-2
rounded-sm
border-none
`;

//비밀번호 찾기
// .loginMid {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// 자동로그인
// .autoLogin
//   font-size: 12px;
//   color: #8d8d8d;
//   line-height: 3;
// }

//SNS 연동

// .socialBox {
//   margin-bottom: 30px;
// }
// .kakao {
//   background-color: #feec34;
//   border-color: #feec34;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-sizing: border-box;
//   margin-bottom: 10px;
//   border-radius: 3px;
// }

// .kakaoLogo {
//   width: 24px;
//   height: 25px;
// }
// .kakaoText {
//   width: 300px;
//   font-size: 15px;
//   text-align: center;
//   display: inline-block;
//   box-sizing: border-box;
// }

// .facebook {
//   background-color: #21538a;
//   border-color: #21538a;
//   height: 40px;
//   display: flex;
//   justify-content: center;
//   box-sizing: border-box;
//   color: #fff;
//   border-radius: 3px;
// }
// .facebookText {
//   padding-top: 12px;
//   width: 310px;
//   color: #fff;
//   font-size: 15px;
//   text-align: center;
//   box-sizing: border-box;
// }

// .facebookLogo {
//   padding-top: 7px;
//   width: 24px;
//   height: 25px;
// }
export default Register;
