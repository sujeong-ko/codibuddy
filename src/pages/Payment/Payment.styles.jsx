import tw from 'tailwind-styled-components';
import styled from 'styled-components';

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

export {
  StudyWrap,
  StudyInfoDetail,
  PaymentAmountDetail,
  PaymentDetailDescription,
};
