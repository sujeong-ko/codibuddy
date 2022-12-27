import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import userImage from '../../assets/userFlat.png';
import * as S from './UpdateMyPage.style';
import { useForm } from 'react-hook-form';
import { languages } from '../../utils/languages.jsx';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useSelector } from 'react-redux';

const token = localStorage.getItem('token');
const config = {
  Authorization: `Bearer ${token}`,
};

const UpdateMyPage = () => {
  //리듀서 접근

  const [updateMyInfo, setMyInfo] = useState({
    pw: '',
    confirmPw: '',
    nickname: '',
    email: '',
    introduce: '',
  });

  //데이터 받기
  useEffect(() => {
    const getUserData = async () => {
      await axios
        .get(`/api/user/`, {
          headers: config,
        })
        .then((response) => {
          const MyData = response.data[0];
          console.log(MyData);
          setMyInfo({
            ...updateMyInfo,
            nickname: MyData.nickname,
            email: MyData.email,
            introduce: MyData.email,
          });
          console.log(MyData.nickname);
        })
        .catch((err) => console.log(err));
    };
    getUserData();
  }, []);

  const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data, updateMyInfo);

  //정보 수정
  const emailHandler = (e) =>
    setMyInfo({ ...updateMyInfo, email: e.target.value });
  const pwHandler = (e) => setMyInfo({ ...updateMyInfo, pw: e.target.value });
  const confirmPwHandler = (e) =>
    setMyInfo({ ...updateMyInfo, confirmPw: e.target.value });
  const introduceHandler = (e) =>
    setMyInfo({ ...updateMyInfo, introduce: e.target.value });

  const submitHandler = async () => {
    // const isPasswordSame = registerInfo.pw === registerInfo.confirmPw;
    // const isPasswordValid = updateMyInfo.pw.length >= 4;

    // if (!isPasswordValid) {
    //   return alert('비밀번호는 4글자 이상이어야 합니다.');
    // }

    // if (!isPasswordSame) {
    //   return alert('비밀번호가 일치하지 않습니다.');
    // }

    try {
      const result = await axios.patch('/api/user', updateMyInfo, {
        headers: config,
      });
      alert(`정상적으로 정보가 업데이트 되었습니다.`);
      console.log(updateMyInfo);
    } catch (err) {
      console.error(err.stack);
      alert(
        `문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`,
      );
    }
  };

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
        <S.ProfileName> {updateMyInfo.nickname} </S.ProfileName>
      </S.ProfileHead>
      <S.ProfileDetail>
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

        <S.TitleText>현재 비밀번호</S.TitleText>
        <S.Input
          className='input'
          id='passwordInput'
          type='password'
          placeholder='현재 비밀번호를 입력해주세요'
          // value={updateMyInfo.pw}
          // onChange={pwHandler}
        />

        <S.TitleText>새 비밀번호</S.TitleText>
        <S.Input
          className='input'
          id='newPasswordInput'
          type='password'
          placeholder='변경할 비밀번호를 입력해주세요'
          // value={updateMyInfo.pw}
          onChange={pwHandler}
        />

        <S.TitleText>새 비밀번호 확인</S.TitleText>
        <S.Input
          className='input'
          id='PWCheckInput'
          type='password'
          placeholder='비밀번호 확인'
          // value={updateMyInfo.confirmPw}
          onChange={confirmPwHandler}
        />

        <div>
          <CategorySelect />
        </div>

        <S.SaveBtn onClick={submitHandler}> 저장하기 </S.SaveBtn>
        {/* 탈퇴하기 */}
      </S.ProfileDetail>
    </S.UpdatePage>
  );
};

export default UpdateMyPage;
