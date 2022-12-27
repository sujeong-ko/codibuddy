import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { DevisionDescription, PageTitle } from '../../styles/CommonStyles.jsx';
import {
  StudyWrap,
  StudyInfoDetail,
  PaymentAmountDetail,
  PaymentDetailDescription,
} from './Payment.styles.jsx';
import getOneStudy from '../../utils/getOneStudy';
import axios from 'axios';
import getCurrentUserInfo from './../../utils/getCurrentUserInfo';
import { useSelector } from 'react-redux';

const token = localStorage.getItem('token');
const config = {
  Authorization: `Bearer ${token}`,
};

const Payment = () => {
  const [userPoint, setUserPoint] = useState(0);
  const { id: study_id } = useParams();
  const navigate = useNavigate();
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    is_online: true,
    price: 0,
    start_at: '',
    limit_head_count: '',
    study_tags: [],
  });

  useEffect(() => {
    getOneStudy(study_id).then((studyData) => {
      console.log(studyData);
      setStudyInfo({
        ...studyInfo,
        title: studyData.data.title,
        is_online: studyData.data.is_online,
        price: studyData.data.price,
        start_at: studyData.data.start_at,
        limit_head_count: studyData.data.limit_head_count,
        study_tags: studyData.data.Study_tags,
      });
    });
  }, []);

  useEffect(() => {
    try {
      getCurrentUserInfo(config).then((userInfo) => {
        setUserPoint(userInfo.data[0].point);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePayment = async () => {
    if (!token) alert('로그인이 필요합니다.');
    try {
      await axios.post(`/api/recruit/${study_id}`, null, {
        headers: config,
      });
      await axios.patch(
        '/api/user',
        {
          point: userPoint - studyInfo.price,
        },
        {
          headers: config,
        },
      );
      navigate('/payment/complete');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <PageTitle>
        <span>예치금 결제하기</span>
      </PageTitle>
      <DevisionDescription>1. 참여할 스터디</DevisionDescription>
      <StudyWrap>
        <div className='text-2xl font-bold'>{studyInfo.title}</div>
        <StudyInfoDetail>
          <span>{studyInfo.start_at} 시작 예정</span>
          <span>|</span>
          <span>{studyInfo.limit_head_count}명</span>
          <span>|</span>
          <span>{studyInfo.is_online ? '온라인' : '오프라인'}</span>
        </StudyInfoDetail>
        <ul>
          {studyInfo.study_tags.map((item) => (
            <li className='inline-block' key={item.tag_id}>
              <img className='h-[2.5rem] mr-2' src={item.Tag.tag_image} />
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
          {studyInfo.price.toLocaleString()}원
        </span>
      </div>
      <DevisionDescription>3. 예치금 결제</DevisionDescription>
      <PaymentAmountDetail>
        <span>참가 예치금</span>
        <span>{studyInfo.price.toLocaleString()}원</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>사용 가능한 포인트</span>
        <span>{userPoint.toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>결제 후 포인트</span>
        <span>{(userPoint - studyInfo.price).toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <Button
        onClick={handlePayment}
        text={`${studyInfo.price.toLocaleString()}원 결제하기`}
      />
    </>
  );
};

export default Payment;
