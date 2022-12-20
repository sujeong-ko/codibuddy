import React from 'react';
import { PageTitle, FlexCenterWrap } from '../../styles/CommonStyles';
import logo from '../../assets/codibuddy-resize.png';
import { StyledLink } from '../../styles/CommonStyles';

const PaymentComplete = () => {
  return (
    <>
      <FlexCenterWrap className='my-8'>
        <img src={logo} alt='코디버디 로고' />
      </FlexCenterWrap>
      <PageTitle>스터디 참여 신청이 완료되었습니다!</PageTitle>
      <StyledLink to='/'>다른 스터디 구경하기</StyledLink>
      <StyledLink to='/mypage'>참여 스터디 확인하기</StyledLink>
    </>
  );
};

export default PaymentComplete;
