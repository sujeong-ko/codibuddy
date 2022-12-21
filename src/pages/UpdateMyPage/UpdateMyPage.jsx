import React from 'react';
import userImage from '../../assets/userFlat.png';
import * as S from './UpdateMyPage.style';
import { useForm } from 'react-hook-form';
import { languages } from '../../utils/languages.jsx';

const UpdateMyPage = () => {
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
    <S.UpdatePage>
      <S.ProfileHead>
        <S.ProfileImage src={userImage} />
        <S.ProfileName> 이름 </S.ProfileName>
      </S.ProfileHead>
      <S.ProfileDetail>
        <S.TitleText id='nicktext'>닉네임</S.TitleText>
        <S.Input
          name='Nickname'
          className='input'
          id='nickInput'
          type='text'
          placeholder='닉네임'
          // onChange={this.loginHandler}
        />

        <S.TitleText id='nicktext'>한 줄 소개</S.TitleText>
        <S.Input
          name='introduc'
          className='input'
          id='introduceInput'
          type='text'
          placeholder='내용을 입력해주세요'
          // onChange={this.loginHandler}
        />

        <S.TitleText id='PWtext'>비밀번호</S.TitleText>
        <S.Input
          name='password'
          className='input'
          id='passwordInput'
          type='password'
          placeholder='비밀번호'
          // onChange={this.loginHandler}
        />

        <S.TitleText id='PWChecktext'>비밀번호 확인</S.TitleText>
        <S.Input
          name='PWcheck'
          className='input'
          id='PWCheckInput'
          type='password'
          placeholder='비밀번호 확인'
          // onChange={this.loginHandler}
        />

        <div>
          <CategorySelect />
        </div>

        <S.SaveBtn
        // onClick={this.loginClickHandler}
        >
          {' '}
          저장하기{' '}
        </S.SaveBtn>
      </S.ProfileDetail>
    </S.UpdatePage>
  );
};

export default UpdateMyPage;
