/* eslint-disable */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { languages } from '../../utils/languages.jsx';
import Button from '../../components/Button/Button.jsx';
import {
  DateSelect,
  DepositSelect,
  DurationSelect,
  HeadcountSelect,
  PositionSelect,
  PlaceSelect,
} from '../../components/StudyInfoInput/StudyInfoInput.jsx';
import {
  Description,
  FormWrap,
  InputWrap,
  TitleInput,
  ContentInput,
  ErrorMessageSpan,
} from './NewStudy.styles.jsx';
import axios from 'axios';

const token = localStorage.getItem('token');

const NewStudy = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!token) {
  //     alert('로그인이 필요합니다.');
  //     navigate('/');
  //   }
  // }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: 'all' });

  const onSubmit = async (data) => {
    if (!token) {
      alert('로그인 한 사용자만 등록할 수 있습니다.');
      return;
    }
    const { language: tag, ...study } = data;
    const studyData = { study, tag };
    console.log(studyData);
    try {
      const result = await axios.post('/api/study', studyData);
      console.log(result);
      navigate(`/payment/${result.data.study.id}`);
    } catch (err) {
      if (err.response.status === 500) {
        alert('정확한 정보를 입력해주세요!');
      }
    }
  };

  const CancleSubmit = () => {
    alert('작성을 취소하시겠습니까?');
    navigate('/');
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Description>1. 스터디 기본 정보를 입력해주세요.</Description>
        <FormWrap>
          <InputWrap>
            <PositionSelect label='포지션' {...register('position')} />
            <HeadcountSelect label='최대 인원' {...register('headcount')} />
          </InputWrap>
          <InputWrap>
            <PlaceSelect label='진행 방식' {...register('is_online')} />
            <DateSelect label='시작일' {...register('start_at')} />
          </InputWrap>
          <InputWrap>
            <DurationSelect label='진행 기간' {...register('end_at')} />
            <DepositSelect label='예치금' {...register('price')} />
          </InputWrap>
          <div>
            <CategorySelect />
          </div>
        </FormWrap>
        <Description>2. 스터디에 대해 설명해주세요.</Description>
        <FormWrap>
          <TitleInput
            name='title'
            id='title'
            placeholder='제목을 적어주세요.'
            {...register('title', {
              required: '제목을 입력해주세요.',
              minLength: {
                value: 3,
                message: '제목을 3글자 이상 입력해주세요.',
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name='title'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <ErrorMessageSpan key={type}>{message}</ErrorMessageSpan>
                  ))
                : null;
            }}
          />
          <div>
            <ContentInput
              placeholder='내용을 적어주세요.'
              {...register('contents', {
                required: '내용을 입력해주세요.',
                minLength: {
                  value: 5,
                  message: '내용을 5글자 이상 입력해주세요.',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name='contents'
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <ErrorMessageSpan key={type}>{message}</ErrorMessageSpan>
                    ))
                  : null;
              }}
            />
          </div>
        </FormWrap>
        <div className='flex justify-end'>
          <Button type='basic' text='작성취소' onClick={CancleSubmit} />
          <Button type='submit' text='등록하기' />
        </div>
      </form>
    </>
  );
};

export default NewStudy;
