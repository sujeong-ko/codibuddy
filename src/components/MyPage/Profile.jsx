import React from 'react';
import {
  Wrap,
  ProfileMain,
  ProfileImg,
  UserInfo,
  Logout,
  SelfText,
  Point,
} from './Profile.styles';
const Profile = ({ image, nickname, introduce, point }) => {
  return (
    <Wrap>
      <ProfileMain>
        <ProfileImg src={image} />
        <UserInfo>{nickname}</UserInfo>
        <Logout>🔓</Logout>
        <SelfText>{introduce}</SelfText>
        <Point>{point}</Point>
      </ProfileMain>
    </Wrap>
  );
};

export default Profile;
