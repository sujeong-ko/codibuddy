import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPen, BsUnlock } from 'react-icons/bs';
import {
  Wrap,
  ProfileMain,
  ProfileImg,
  UserInfo,
  Icon,
  Contents,
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
        <UserInfo>{nickname} 님</UserInfo>
        <Icon>
          <BsUnlock
            onClick={LogOut}
            size={25}
            color='#52B4D0'
            className='flex
items-center
cursor-pointer'></BsUnlock>
          <BsPen
            onClick={() => navigate('/update-mypage')}
            size={25}
            color='#52B4D0'
            className='flex
items-center cursor-pointer'></BsPen>
        </Icon>
      </ProfileMain>
      <Contents>
        <SelfText>{introduce}</SelfText>
        <Point>{point} point</Point>
      </Contents>
    </Wrap>
  );
};

export default Profile;
