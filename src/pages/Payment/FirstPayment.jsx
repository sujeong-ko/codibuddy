import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { DevisionDescription, PageTitle } from '../../styles/CommonStyles.jsx';
import {
  StudyWrap,
  StudyInfoDetail,
  PaymentAmountDetail,
  PaymentDetailDescription,
} from './Payment.styles.jsx';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { config } from '../../utils/configCreator.jsx';
import getCurrentUserInfo from './../../utils/getCurrentUserInfo';

const token = localStorage.getItem('userToken');

const Payment = () => {
  const [currentUserPoint, setCurrentUserPoint] = useState(0);
  //   const currenteUserInfo = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    getCurrentUserInfo(token).then((response) => {
      const currentUserInfo = response.data[0];
      setCurrentUserPoint(currentUserInfo.point);
    });
  });

  // store에서 new에서 넘어온 스터디 정보 가져오기
  const tempStudyInfo = useSelector((state) => state.study.tempStudyInfo);
  const tempStudyTag = useSelector((state) => state.study.tempStudyTag);

  //   console.log(tempStudyInfo);

  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!token) alert('로그인이 필요합니다.');

    // 스터디를 처음 생성할 때 방장이 결제까지 완료해야 스터디 생성됨
    try {
      const userPatchResult = await axios.patch(
        '/api/user/payment',
        {
          point: currentUserPoint - tempStudyInfo.price,
        },
        {
          headers: config(token),
        },
      );
      console.log(userPatchResult);
    } catch (err) {
      console.log(err);
    }

    const studyPostResult = await axios.post(
      `api/study`,
      {
        study: { ...tempStudyInfo },
        tag: [...tempStudyTag],
      },
      {
        headers: config(token),
      },
    );

    await axios.post(`/api/recruit/${studyPostResult.data.studyId}`, null, {
      headers: config(token),
    });

    navigate('/payment/complete');
  };

  return (
    <>
      <PageTitle>
        <span>예치금 결제하기</span>
      </PageTitle>
      <DevisionDescription>1. 참여할 스터디</DevisionDescription>
      <StudyWrap>
        <div className='text-2xl font-bold'>{tempStudyInfo.title}</div>
        <StudyInfoDetail>
          <span>{tempStudyInfo.start_at} 시작 예정</span>
          <span>|</span>
          <span>{tempStudyInfo.limit_head_count}명</span>
          <span>|</span>
          <span>{tempStudyInfo.is_online ? '온라인' : '오프라인'}</span>
        </StudyInfoDetail>
        <ul>
          {tempStudyTag.map((item, index) => (
            <li className='inline-block' key={index}>
              {/* <img className='h-[2.5rem] mr-2' src={item.Tag.tag_image} /> */}
              <span className='mr-2 text-sm text-[#52b4d0]'>{item}</span>
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
          {Number(tempStudyInfo.price).toLocaleString()}원
        </span>
      </div>
      <DevisionDescription>3. 예치금 결제</DevisionDescription>
      <PaymentAmountDetail>
        <span>참가 예치금</span>
        <span>{Number(tempStudyInfo.price).toLocaleString()}원</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>사용 가능한 포인트</span>
        <span>{currentUserPoint.toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>결제 후 포인트</span>
        <span>
          {(currentUserPoint - tempStudyInfo.price).toLocaleString()} 포인트
        </span>
      </PaymentAmountDetail>
      <Button
        onClick={handlePayment}
        text={`${tempStudyInfo.price.toLocaleString()}원 결제하기`}
      />
    </>
  );
};

export default Payment;
