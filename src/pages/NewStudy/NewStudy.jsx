import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
} from './NewStudy.styles.jsx';

const NewStudy = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
            <PlaceSelect label='진행 방식' {...register('place')} />
            <DateSelect label='시작일' {...register('startDate')} />
          </InputWrap>
          <InputWrap>
            <DurationSelect label='진행 기간' {...register('duration')} />
            <DepositSelect label='예치금' {...register('deposit')} />
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
            {...register('title')}
          />
          <div>
            <ContentInput
              placeholder='내용을 적어주세요.'
              {...register('content')}
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
