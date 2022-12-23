import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';
import { useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Login = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const close = () => {
    dispatch(modalSlice.actions.loginToggle());
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await axios.post(
        'api/users/login',
        JSON.stringify(data),
        config,
      );
      console.log(result);
      localStorage.setItem('token', result.data.token);
      console.log(localStorage.getItem('token'));
      dispatch(modalSlice.actions.loginToggle());
    } catch (err) {
      console.log(err);
    }
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
