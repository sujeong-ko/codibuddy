import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
const Profile = () => {
  return (
    <Wrap>
      <ProfileMain>
        <ProfileImg
          src={
            'https://user-images.githubusercontent.com/65716445/209169292-b33725cc-0362-4cb4-976a-2e525b6943c5.png'
          }
        />
        <UserInfo>닉네임</UserInfo>
        <Logout>🔓</Logout>
        <SelfText>&#39;안녕하세요! 프론트엔드 지망생입니당!&#39;</SelfText>
      </ProfileMain>
    </Wrap>
  );
};

export default Profile;

const Wrap = tw.div`
flex
flex-col
justify-center
items-center
w-full
h-50
border-b
`;
const ProfileMain = tw.div`
flex
space-x-4
`;
const UserInfo = tw.div`
flex
items-center
justify-center
text-xl
`;
const ProfileImg = tw.img`
w-[100px]
h-[100px]
rounded-xl
p-0.5
m-4
bg-[#667288]
`;

const Logout = tw.button`
flex
items-center
ml-2
`;
const SelfText = tw.div`
text-l
ml-3
p-2
flex
items-center
justify-center

`;
