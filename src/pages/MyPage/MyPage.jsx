import React from 'react';
import Sidebar from '../../components/MyPage/Sidebar';
import Profile from '../../components/MyPage/Profile';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, Box, Item } from './MyPage.styles';
const MyPage = () => {
  const dumyData = [1, 2, 3];
  return (
    <Wrap>
      <Profile />
      <Sidebar />
      <Box>
        <Item>
          {dumyData.map((i) => (
            <StudyCard key={i} />
          ))}
        </Item>
      </Box>
    </Wrap>
  );
};

export default MyPage;
