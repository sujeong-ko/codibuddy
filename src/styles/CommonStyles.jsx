import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DevisionDescription = tw.div`
font-bold
text-xl
my-6
`;

export const PageTitle = tw(DevisionDescription)`
flex 
justify-center 
text-2xl
`;

export const FlexCenterWrap = tw.div`
flex
justify-center
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  margin: 15px 0 10px 10px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #52b4d0;
  color: white;
`;
