import React from 'react';
import CategoryNav from '../../components/NavBar/CategoryNav';
import LanguageNav from '../../components/NavBar/LanguageNav';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap } from './Home.styles.jsx';
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
