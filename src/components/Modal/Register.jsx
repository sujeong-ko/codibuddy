import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Modal.style';
import { useForm } from 'react-hook-form';
import { languages } from '../../utils/languages.jsx';
import { useSelector, useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice.jsx';

const Register = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => {
    return state.modal.isOpen;
  });
  const close = () => {
    dispatch(modalSlice.actions.change(!isOpen));
  };

  const { register } = useForm();

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
          <div
          // onClick={close}
          >
            <S.ModalDiv>
              <S.Close onClick={close}>&times;</S.Close>
              <S.ModalContents
              // onClick={isOpen}
              >
                <S.ModalTitle>회원가입</S.ModalTitle>
                <S.TitleText id='IDtext'>ID</S.TitleText>
                <S.Input
                  name='ID'
                  className='input'
                  id='idInput'
                  type='text'
                  placeholder='아이디'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='PWtext'>Password</S.TitleText>
                <S.Input
                  name='password'
                  className='input'
                  id='passwordInput'
                  type='password'
                  placeholder='비밀번호'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='PWChecktext'>Password Check</S.TitleText>
                <S.Input
                  name='PWcheck'
                  className='input'
                  id='PWCheckInput'
                  type='password'
                  placeholder='비밀번호 확인'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='nicktext'>Nickname</S.TitleText>
                <S.Input
                  name='nickname'
                  className='input'
                  id='nicknameInput'
                  type='text'
                  placeholder='닉네임'
                  // onChange={this.loginHandler}
                />

                <S.TitleText id='emailtext'>Email</S.TitleText>
                <S.Input
                  name='email'
                  className='input'
                  id='emailInput'
                  type='email'
                  placeholder='123@xxxx.com'
                  // onChange={this.loginHandler}
                />

                <div>
                  <CategorySelect />
                </div>

                <S.ModalBtn
                // onClick={this.loginClickHandler}
                >
                  {' '}
                  회원가입{' '}
                </S.ModalBtn>
              </S.ModalContents>
            </S.ModalDiv>
          </div>
        </S.ModalMain>
      }
    </>
  );
};

export default Register;
