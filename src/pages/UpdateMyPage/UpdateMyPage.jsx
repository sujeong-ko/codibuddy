import React, { useState, useEffect } from 'react';
import userImage from '../../assets/userFlat.png';
import * as S from './UpdateMyPage.style';
import { useForm } from 'react-hook-form';
import { languages } from '../../utils/languages.jsx';
import axios from 'axios';

const UpdateMyPage = () => {
  //리듀서 접근

  const [updateMyInfo, setMyInfo] = useState({
    checkPassword: '',
    pw: '',
    confirmPw: '',
    nickname: '',
    email: '',
    introduce: '',
    tag: '',
  });

  //데이터 받기
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const getUserData = async () => {
      await axios
        .get(`/api/user/`, {
          headers: config,
        })
        .then((response) => {
          const MyData = response.data[0];
          console.log('get data', MyData);
          setMyInfo({
            ...updateMyInfo,
            nickname: MyData.nickname,
            email: MyData.email,
            introduce: MyData.introduce,
            UserTags: MyData.UserTags || [],
          });
        })
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);

  const { register, handleSubmit } = useForm();
  //submit
  const onSubmit = async ({ language }) => {
    const isPasswordSame = updateMyInfo.pw === updateMyInfo.confirmPw;
    const isPasswordValid =
      updateMyInfo.pw.length >= 4 || updateMyInfo.pw.length == '';

    if (!isPasswordValid) {
      return alert('비밀번호는 4글자 이상이어야 합니다.');
    }

    if (!isPasswordSame) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    const token = localStorage.getItem('userToken');
    const config = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const fullupdateMyInfo = { ...updateMyInfo, tag: language.toString() };
      console.log('fullupdateMYInfo 데이터', fullupdateMyInfo);
      const result = await axios.patch('/api/user', fullupdateMyInfo, {
        headers: config,
      });
      alert(`정상적으로 정보가 업데이트 되었습니다.`);
      console.log('결과값', result);
    } catch (err) {
      console.log(err);
    }
  };

  //정보 수정
  const emailHandler = (e) =>
    setMyInfo({ ...updateMyInfo, email: e.target.value });
  const pwHandler = (e) => setMyInfo({ ...updateMyInfo, pw: e.target.value });
  const confirmPwHandler = (e) =>
    setMyInfo({ ...updateMyInfo, confirmPw: e.target.value });
  const introduceHandler = (e) =>
    setMyInfo({ ...updateMyInfo, introduce: e.target.value });
  const currentPwHandler = (e) =>
    setMyInfo({ ...updateMyInfo, checkPassword: e.target.value });

  const CategorySelect = () => {
    const CategoryInput = ({ language, value, checked }) => (
      <div className='inline-block mr-1'>
        <label>
          <input
            className='m-2'
            {...register('language')}
            type='checkbox'
            value={value}
            checked={checked}
          />
          {language}
        </label>
      </div>
    );

    return (
      <>
        <p className='my-2'>기술 스택</p>
        <div className='border border-solid border-inherit px-1 py-3 rounded'>
          {updateMyInfo.UserTags &&
            languages.map((item, idx) => {
              const checked = !!updateMyInfo.UserTags.find(
                (el) =>
                  el?.Tag?.tag_name.toLowerCase() === item.value.toLowerCase(),
              );
              return (
                <CategoryInput
                  key={idx}
                  language={item.name}
                  value={item.value}
                  checked={checked}
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
        <S.ProfileName> {updateMyInfo.nickname} </S.ProfileName>
      </S.ProfileHead>
      <S.ProfileDetail onSubmit={handleSubmit(onSubmit)}>
        <S.TitleText>이메일</S.TitleText>
        <S.Input
          className='input'
          id='emailInput'
          type='text'
          placeholder='이메일을 입력해주세요'
          value={updateMyInfo.email}
          onChange={emailHandler}
        />

        <S.TitleText>한 줄 소개</S.TitleText>
        <S.Input
          className='input'
          id='introduceInput'
          type='text'
          placeholder='내용을 입력해주세요'
          value={updateMyInfo.introduce}
          onChange={introduceHandler}
        />

        <div>
          <CategorySelect />
        </div>
        <S.TitleText>현재 비밀번호</S.TitleText>
        <S.Input
          className='input'
          id='newPasswordInput'
          type='password'
          placeholder='현재 비밀번호를 입력해주세요'
          value={updateMyInfo.checkPassword}
          onChange={currentPwHandler}
        />
        <passwordDiv>
          <S.TitleText>새 비밀번호</S.TitleText>
          <S.Input
            className='input'
            id='newPasswordInput'
            type='password'
            placeholder='변경을 원하신다면 새로운 비밀번호를 입력해주세요.'
            value={updateMyInfo.pw}
            onChange={pwHandler}
          />

          <S.TitleText>새 비밀번호 확인</S.TitleText>
          <S.Input
            className='input'
            id='PWCheckInput'
            type='password'
            placeholder='새로운 비밀번호 확인'
            value={updateMyInfo.confirmPw}
            onChange={confirmPwHandler}
          />
        </passwordDiv>

        <S.SaveBtn> 저장하기 </S.SaveBtn>
        {/* 탈퇴하기 */}
      </S.ProfileDetail>
    </S.UpdatePage>
  );
};

export default UpdateMyPage;
