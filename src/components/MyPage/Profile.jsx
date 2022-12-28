import axios from 'axios';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Wrap,
  ProfileMain,
  ProfileImg,
  UserInfo,
  Logout,
  SelfText,
  Point,
} from './Profile.styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const Profile = ({ image, nickname, introduce, point }) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const token = localStorage.getItem('userToken');
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        dispatch(logout());
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
        <Logout onClick={LogOut}>로그아웃</Logout>
        <Link to='/update-mypage'>내 정보수정</Link>
        <SelfText>{introduce}</SelfText>
        <Point>{point} 포인트</Point>
      </ProfileMain>
    </Wrap>
  );
};

export default Profile;
