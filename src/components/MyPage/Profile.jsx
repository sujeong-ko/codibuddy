import React from 'react';
import {
  Wrap,
  ProfileMain,
  ProfileImg,
  UserInfo,
  Logout,
  SelfText,
} from './Profile.styles';
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
