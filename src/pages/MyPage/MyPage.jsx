import React from 'react';
import Sidebar from '../../components/MyPage/Sidebar';
import Profile from '../../components/MyPage/Profile';
import tw from 'tailwind-styled-components';
const MyPage = () => {
  return (
    <Wrap>
      <Profile />
      <Sidebar />
      <Box>gg</Box>
    </Wrap>
  );
};

export default MyPage;

const Wrap = tw.div`
flex
flex-wrap
`;
const Box = tw.div`
w-3/4
h-fit
bg-yellow-400
`;
