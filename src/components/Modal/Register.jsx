import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';
import { useForm } from 'react-hook-form';
import { languages } from '../../utils/languages.jsx';
import { useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';
import axios from 'axios';

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    user_id: '',
    pw: '',
    nickname: '',
    email: '',
  });

  const dispatch = useDispatch();
  const close = () => {
    dispatch(modalSlice.actions.registerToggle());
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data, registerInfo);
      const result = await axios.post('api/users/register', registerInfo);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  //회원가입 정보 보내기

  const userIdHandler = (e) =>
    setRegisterInfo({ ...registerInfo, user_id: e.target.value });
  const pwHandler = (e) =>
    setRegisterInfo({ ...registerInfo, pw: e.target.value });
  const confirmPwHandler = (e) =>
    setRegisterInfo({ ...registerInfo, confirmPw: e.target.value });
  const nicknameHandler = (e) =>
    setRegisterInfo({ ...registerInfo, nickname: e.target.value });
  const emailHandler = (e) =>
    setRegisterInfo({ ...registerInfo, email: e.target.value });

  // const submitHandler = async () => {
  //   const result = await axios.post('/users/register', registerInfo);
  // };

  const CategorySelect = () => {
    const CategoryInput = ({ language, value }) => (
      <div className='inline-block mr-1'>
        <label>
          <input
            className='m-2'
            {...register('language')}
            type='checkbox'
            value={value}
          />
          {language}
        </label>
      </div>
    );

    return (
      <>
        <p className='my-2'>기술 스택</p>
        <div className='border border-solid border-inherit px-1 py-3 rounded'>
          {languages.map((item, idx) => {
            return (
              <CategoryInput
                key={idx}
                language={item.name}
                value={item.value}
              />
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      {
        <S.ModalMain>
          <S.ModalDiv>
            <S.Close onClick={close}>&times;</S.Close>
            <S.ModalContents onSubmit={handleSubmit(onSubmit)}>
              <S.ModalTitle>회원가입</S.ModalTitle>
              <S.TitleText id='IDtext'>ID</S.TitleText>
              <S.Input
                name='ID'
                className='input'
                id='idInput'
                type='text'
                placeholder='아이디'
                value={registerInfo.user_id}
                onChange={userIdHandler}
              />

              <S.TitleText id='PWtext'>Password</S.TitleText>
              <S.Input
                name='password'
                className='input'
                id='passwordInput'
                type='password'
                placeholder='비밀번호'
                value={registerInfo.pw}
                onChange={pwHandler}
              />

              <S.TitleText id='PWChecktext'>Password Check</S.TitleText>
              <S.Input
                name='PWcheck'
                className='input'
                id='PWCheckInput'
                type='password'
                placeholder='비밀번호 확인'
                value={registerInfo.confirmPw}
                // onChange={confirmPwHandler}
              />

              <S.TitleText id='nicktext'>Nickname</S.TitleText>
              <S.Input
                name='nickname'
                className='input'
                id='nicknameInput'
                type='text'
                placeholder='닉네임'
                value={registerInfo.nickname}
                onChange={nicknameHandler}
              />

              <S.TitleText id='emailtext'>Email</S.TitleText>
              <S.Input
                name='email'
                className='input'
                id='emailInput'
                type='email'
                placeholder='123@xxxx.com'
                value={registerInfo.email}
                onChange={emailHandler}
              />

              <div>
                <CategorySelect />
              </div>

              <S.ModalBtn
              // onClick={submitHandler}
              >
                {' '}
                회원가입{' '}
              </S.ModalBtn>
            </S.ModalContents>
          </S.ModalDiv>
        </S.ModalMain>
      }
    </>
  );
};

export default Register;

// const [user_id, setuserID] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [nickname, setNickname] = useState('');
// const [confirmPasword, setConfirmPasword] = useState('');
// const dispatch = useDispatch();

// const onIDHandler = (e) => {
//   setuserID(e.currentTarget.value);
// };

// const onEmailHandler = (e) => {
//   setEmail(e.currentTarget.value);
// };

// const onNicknameHandler = (e) => {
//   setNickname(e.currentTarget.value);
// };

// const onPasswordHanlder = (e) => {
//   setPassword(e.currentTarget.value);
// };

// const onConfirmPasswordHandler = (e) => {
//   setConfirmPasword(e.currentTarget.value);
// };
