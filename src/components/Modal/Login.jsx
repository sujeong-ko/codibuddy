import React, { useState, useEffect } from 'react';
import * as S from './Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { login } from '../../redux/userSlice.jsx';
import { useForm } from 'react-hook-form';
import { store } from './../../redux/configureStore';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const close = () => {
    dispatch(modalSlice.actions.loginToggle());
  };

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(
        '/api/user/login',
        JSON.stringify(data),
        config,
      );
      // console.log(result);
      loginSuccess(result);
    } catch (err) {
      console.log(err);
    }
  };

  const loginSuccess = async (res) => {
    console.log('로그인 성공');
    //이전에 남아있는 토큰이 있을 경우 지우기
    localStorage.removeItem('userToken');
    localStorage.removeItem('refreshToken');
    //localStorage에 토큰 저장
    localStorage.setItem('userToken', res.data.userToken);
    localStorage.setItem('refreshToken', res.data.refresh_token);
    //store에 token 저장
    dispatch(modalSlice.actions.loginToggle());
    dispatch(login(res.data.userToken));
    console.log(res);
    jwtDecode(res.data.userToken);
  };
  //jwt 받아오는 decode
  const jwtDecode = async (token) => {
    const decoded = jwt_decode(token);
    // console.log(decoded?.exp);
    const reTime = decoded.exp;
    const userId = decoded.userId;
    console.log('1.만료:', reTime);

    async function getTime() {
      return new Promise(function (resolve, reject) {
        const date = Date.now();
        const nowTime = Math.floor(date / 1000);
        // console.log("현재시간:", nowTime);
        while (nowTime <= reTime) {
          setTimeout(getTime, 1000);
          return nowTime;
        }
        console.log('2.빠져나옴');
        resolve(nowTime);
        isAccessTokenEnd(nowTime);
      });
    }
    function isAccessTokenEnd(t) {
      console.log('3.비교');
      if (t >= reTime) {
        onSilentRefresh(userId);
      }
    }
    await getTime();
  };
  const onSilentRefresh = (id) => {
    console.log('엑세스 토큰 시간 만료');
    const data = localStorage.getItem('refreshToken');
    const userToken = localStorage.getItem('userToken');
    console.log(data);
    // (axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${userToken}`)

    axios
      .post(
        '/api/user/confirm_jwt',
        {
          user_id: id,
          refresh_token: data,
        },
        { headers: { Authorization: `Bearer ${userToken}` } },
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem('userToken', res.data.newJwt);
        jwtDecode(res.data.newJwt);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <S.ModalMain>
        <S.ModalDiv>
          <S.Close onClick={close}>&times;</S.Close>
          <S.ModalContents onSubmit={handleSubmit(onSubmit)}>
            <S.ModalTitle>로그인</S.ModalTitle>
            <S.TitleText>ID</S.TitleText>
            <S.Input
              className='loginId'
              type='text'
              placeholder='아이디'
              {...register('user_id')}
            />
            <S.TitleText>Password</S.TitleText>
            <S.Input
              className='loginPw'
              type='password'
              placeholder='비밀번호'
              {...register('pw')}
            />
            <S.ModalBtn> LOGIN </S.ModalBtn>
            <S.LoginEnd>
              <S.LoginLine
                onClick={() => {
                  dispatch(modalSlice.actions.loginToggle());
                  dispatch(modalSlice.actions.registerToggle());
                }}>
                회원이 아니신가요? <span>회원가입</span>
              </S.LoginLine>
            </S.LoginEnd>
          </S.ModalContents>
        </S.ModalDiv>
      </S.ModalMain>
    </>
  );
};

export default Login;
