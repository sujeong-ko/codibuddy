import React from 'react';
import CategoryNav from '../../components/NavBar/CategoryNav';
import LanguageNav from '../../components/NavBar/LanguageNav';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, StudyWrap } from './Home.styles.jsx';
const Home = () => {
  const dumy = [1, 2, 3, 4, 5, 6];
  return (
    <Wrap>
      <CategoryNav />
      <LanguageNav />
      <StudyWrap>
        {dumy.map((i) => (
          <StudyCard key={i} />
        ))}
      </StudyWrap>
    </Wrap>
  );
};

export default Home;
