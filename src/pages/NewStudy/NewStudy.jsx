/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
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
import { tempSetStudy } from '../../redux/studySlice.jsx';
import { useDispatch } from 'react-redux';

const NewStudy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: 'all' });

  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('userToken');

    if (!token) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/');
      return;
    }
  }, []);

  // 기술스택 GET
  const LanguageList = async () => {
    await axios.get(`api/tag/all`).then((response) => {
      const tags = response.data.map((item) => item.tag_name);
      setLanguages([...tags]);
    });
  };

  useEffect(() => {
    LanguageList();
  }, []);

  const onSubmit = async (data) => {
    const { language: tag, ...study } = data;
    const studyData = { ...study, tag };
    console.log(studyData);
    dispatch(
      tempSetStudy({
        studyInfo: {
          title: studyData.title,
          start_at: studyData.start_at,
          limit_head_count: studyData.limit_head_count,
          is_online: studyData.is_online,
          contents: studyData.contents,
          end_at: studyData.end_at,
          position: studyData.position,
          price: studyData.price,
        },
        studyTag: [...tag],
      }),
    );
    navigate('/payment');
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
            return <CategoryInput key={idx} language={item} value={item} />;
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
            <HeadcountSelect
              label='최대 인원'
              {...register('limit_head_count')}
            />
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
