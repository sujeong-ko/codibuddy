import React from 'react';
import tw from 'tailwind-styled-components';
import CategoryNav from '../components/CategoryNav';
import LanguageNav from '../components/LanguageNav';
import StudyCard from '../components/StudyCard';

const Home = () => {
  return (
    <Wrap>
      <CategoryNav />
      <LanguageNav />
      <StudyCard />
    </Wrap>
  );
};

export default Home;

const Wrap = tw.div`
flex-1
`;
