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
      <PageTitle>앗, 존재하지 않는 페이지입니다!</PageTitle>
      <StyledLink to='/'>메인으로 돌아가기</StyledLink>
    </>
  );
};

export default PaymentComplete;
