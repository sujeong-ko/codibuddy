import React, { useEffect, useState } from 'react';
import CategoryNav from '../../components/NavBar/CategoryNav';
import LanguageNav from '../../components/NavBar/LanguageNav';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, StudyWrap } from './Home.styles.jsx';
import axios from 'axios';

const Home = () => {
  const [datas, setDatas] = useState();
  const StudyList = async () => {
    await axios.get('/api/study').then((response) => {
      console.log(response);
      setDatas(response.data);
    });
    // .catch((err) => {});
  };
  useEffect(() => {
    StudyList();
  }, []);
  console.log('데이터', datas);
  return (
    <Wrap>
      <CategoryNav />
      <LanguageNav />
      <StudyWrap>
        {datas &&
          datas?.map((data) => (
            <StudyCard
              key={data.id}
              startDate={data.start_at}
              people={data.author}
              title={data.title}
              isOnline={data.is_online}
              // tag={data.Study_tags}
              positon={data.position}
            />
          ))}
      </StudyWrap>
    </Wrap>
  );
};

export default Home;
