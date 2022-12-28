import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const refreshToken = localStorage.getItem('refreshToken');
  const token = localStorage.getItem('userToken');
  const navigate = useNavigate();
  const LogOut = () => {
    console.log('로그아웃');
    axios
      .delete('/api/user/confirm_jwt', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        data: {
          refresh_token: refreshToken,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userToken');
        alert('로그아웃되셨습니다.');
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Wrap>
      <ProfileMain>
        <ProfileImg src={image} />
        <UserInfo>{nickname}</UserInfo>
        <Logout onClick={LogOut}>🔓</Logout>
        <SelfText>{introduce}</SelfText>
        <Point>{point}</Point>
      </ProfileMain>
    </Wrap>
  );
};

export default Profile;
