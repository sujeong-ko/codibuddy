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
import { token, config } from '../../utils/configCreator.jsx';

const Payment = () => {
  const [currentUserPoint, setCurrentUserPoint] = useState(0);
  // const currenteUserInfo = useSelector((state) => state.user.userInfo);
  const { id: study_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentUserInfo(token).then((response) => {
      const currentUserInfo = response.data[0];
      setCurrentUserPoint(currentUserInfo.point);
    });
  });
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    author: '',
    is_online: true,
    price: 0,
    start_at: '',
    limit_head_count: '',
    study_tags: [],
  });

  useEffect(() => {
    getOneStudy(study_id).then((response) => {
      const studyData = response.data;
      setStudyInfo({
        ...studyInfo,
        title: studyData.title,
        is_online: studyData.is_online,
        price: studyData.price,
        start_at: studyData.start_at,
        limit_head_count: studyData.limit_head_count,
        study_tags: studyData.StudyTags,
        author: studyData.User.nickname,
      });
    });
  }, []);

  const handlePayment = async () => {
    if (!token) alert('로그인이 필요합니다.');

    // 작성자면 handlePayment에서 axios.post로 스터디 create 해야함
    // 그러면 위에서 스터디 정보는 어떻게 가져와..
    // store에 tempStudyInfo로 담아야되나..........
    try {
      await axios.patch(
        '/api/user/payment',
        {
          point: currentUserPoint - studyInfo.price,
        },
        {
          headers: config(token),
        },
      );
      await axios.post(`/api/recruit/${study_id}`, null, {
        headers: config(token),
      });

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
        <span>{currentUserPoint.toLocaleString()} 포인트</span>
      </PaymentAmountDetail>
      <PaymentAmountDetail>
        <span>결제 후 포인트</span>
        <span>
          {(currentUserPoint - studyInfo.price).toLocaleString()} 포인트
        </span>
      </PaymentAmountDetail>
      <Button
        onClick={handlePayment}
        text={`${studyInfo.price.toLocaleString()}원 결제하기`}
      />
    </>
  );
};

export default Payment;
