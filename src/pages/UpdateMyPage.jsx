import React from 'react';
import tw from 'tailwind-styled-components';
import userImage from '../assets/userFlat.png';

const UpdateMyPage = () => {
  return (
    <UpdatePage>
      <ProfileHead>
        <ProfileImage src={userImage} />
        <ProfileName> 이름 </ProfileName>
      </ProfileHead>
      <ProfileDetail>
        <TitleText id='nicktext'>닉네임</TitleText>
        <Input
          name='Nickname'
          className='input'
          id='nickInput'
          type='text'
          placeholder='닉네임'
          // onChange={this.loginHandler}
        />

        <TitleText id='nicktext'>한 줄 소개</TitleText>
        <Input
          name='introduc'
          className='input'
          id='introduceInput'
          type='text'
          placeholder='내용을 입력해주세요'
          // onChange={this.loginHandler}
        />

        <TitleText id='PWtext'>비밀번호</TitleText>
        <Input
          name='password'
          className='input'
          id='passwordInput'
          type='password'
          placeholder='비밀번호'
          // onChange={this.loginHandler}
        />

        <TitleText id='PWChecktext'>비밀번호 확인</TitleText>
        <Input
          name='PWcheck'
          className='input'
          id='PWCheckInput'
          type='password'
          placeholder='비밀번호 확인'
          // onChange={this.loginHandler}
        />

        <TitleText id='techStack'>기술스택</TitleText>
        <Input
          name='techStack'
          className='input'
          id='techStackInput'
          type='text'
          placeholder='기술을 선택해주세요'
          // onChange={this.loginHandler}
        />

        <SaveBtn
        // onClick={this.loginClickHandler}
        >
          {' '}
          저장하기{' '}
        </SaveBtn>
      </ProfileDetail>
    </UpdatePage>
  );
};

const UpdatePage = tw.div`
mt-7
ml-auto
mr-auto
mb-auto
w-2/3
`;

const ProfileHead = tw.div`
border-b-4
w-full
sticky
flex
gap-2
pb-5
`;

const ProfileImage = tw.img`
w-10
h-10
mr-3
`;

const ProfileName = tw.div`
mt-2
`;

const ProfileDetail = tw.div`
w-5/6
mt-5
ml-auto
mr-auto
mb-auto
`;

const Input = tw.input`
placeholder-shown:bg-slate-50
rounded-sm
w-full
h-12
border-1
border-[#e5e5e5]
pt-1
pb-1
pl-1
mb-3
outline-0
box-border
`;

const TitleText = tw.div`
mt-2
text-sm
text-black
leading-loose
`;

const SaveBtn = tw.button`
h-3/7
w-2/5
text-base
pt-2
pb-2
cursor-pointer
bg-[#52b4d0]
text-white
leading-loose
mt-5
ml-auto
mr-auto
mb-auto
rounded-sm
border-none
`;

export default UpdateMyPage;
