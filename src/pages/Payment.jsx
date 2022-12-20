import React from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { languages } from '../utils/languages';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { DevisionDescription, PageTitle } from '../styles/CommonStyles.jsx';

//해당 스터디 정보에서 아래만 데이터만 받아오기
const studyInfo = {
  title: '사이드 프로젝트 프론트 팀원 구합니다!',
  place: 'online',
  startDate: '2022-12-20',
  duration: 1,
  deposit: 1000,
  language: ['javascript', 'react', 'java'],
  // 여기에 객체배열로 name이랑 img src도 함께 들어있는 걸로?
};

const userPoint = 5000;

const Payment = () => {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle>
        <span>예치금 결제하기</span>
      </PageTitle>
      <DevisionDescription>1. 참여할 스터디</DevisionDescription>
      <StudyWrap>
        <div className='text-2xl font-bold'>{studyInfo.title}</div>
        <StudyInfoDetail>
          <span>{studyInfo.startDate} 시작 예정</span>
          <span>|</span>
          <span>{studyInfo.duration}개월</span>
          <span>|</span>
          <span>{studyInfo.place}</span>
        </StudyInfoDetail>
        <ul>
          {languages.map((item, idx) => (
            <li className='inline-block' key={idx}>
              <img className='h-[2.5rem]' src={item.img} />
            </li>
          ))}
        </ul>
      </StudyWrap>
      <DevisionDescription>2. 예치금</DevisionDescription>
      <PaymentDetailDescription>
        <span>- 시작 전에 스터디가 취소되면 예치금이 자동 환불됩니다. </span>
        <span>
          - 스터디 시작 이후에는 스터디 규칙에 따라 환급될 예치금이 달라집니다.
        </span>
      </PaymentDetailDescription>
      <div className='flex-col'>
        <span className='flex justify-center text-5xl my-12'>
          {studyInfo.deposit.toLocaleString()}원
        </span>
      </div>
      <DevisionDescription>3. 예치금 결제</DevisionDescription>
      <PaymentAmountDetail>
        <span>참가 예치금</span>
        <span>{studyInfo.deposit.toLocaleString()}원</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>사용 가능한 포인트</span>
        <span>{userPoint.toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>결제 후 포인트</span>
        <span>{(userPoint - studyInfo.deposit).toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <Button
        onClick={() => {
          // order db에 post 요청?
          navigate('/payment/complete');
        }}
        text={`${studyInfo.deposit.toLocaleString()}원 결제하기`}
      />
    </>
  );
};

export default Payment;

const StudyWrap = tw.div`
border
border-inherit
rounded-lg
p-5
shadow-lg
`;

const StudyInfoDetail = styled.div`
  > span {
    display: inline-block;
    margin: 8px 8px 8px 0;
    color: grey;
  }
`;

const PaymentDetailDescription = styled.div`
  > span {
    display: block;
    color: red;
  }
`;

const PaymentAmountDetail = tw.div`
flex 
justify-between 
text-2xl
mb-4
`;
