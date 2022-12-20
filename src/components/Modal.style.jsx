import tw from 'tailwind-styled-components';

const ModalMain = tw.div`
fixed top-0 left-0 right-0
bg-gray-500/50
h-full
`;

const ModalDiv = tw.div`
w-2/6
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

const ModalTitle = tw.div`
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

const ModalBtn = tw.button`
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

const LoginEnd = tw.div`
text-center
text-base
mb-5
`;

const LoginLine = tw.div`
text-[#bcbcbc]
text-base
mb-10
`;

const ContentInput = tw.textarea`
w-full
h-80
min-h-fit
border
border-solid
border-inherit
p-2
rounded
resize-none
`;

export {
  ModalMain,
  ModalDiv,
  ModalTitle,
  ModalContents,
  Close,
  Input,
  TitleText,
  ModalBtn,
  LoginEnd,
  LoginLine,
  ContentInput,
};

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

////register

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
