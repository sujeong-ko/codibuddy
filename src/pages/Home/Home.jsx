import React, { useEffect, useState } from 'react';
import CategoryNav from '../../components/NavBar/CategoryNav';
import LanguageNav from '../../components/NavBar/LanguageNav';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, StudyWrap } from './Home.styles.jsx';
import axios from 'axios';

const Home = () => {
  const [category, setCategory] = useState('front_end');
  const changeMenu = (menu) => {
    // console.log(menu);
    setCategory(menu);
  };
  const [datas, setDatas] = useState();
  const StudyList = async () => {
    if (category === 'all') {
      await axios.get(`/api/study`).then((response) => {
        console.log(response);
        setDatas(response.data);
      });
    } else {
      await axios.get(`/api/study/kind/${category}`).then((response) => {
        // console.log(response);
        setDatas(response.data);
      });
    }
  };
  useEffect(() => {
    StudyList();
  }, []);
  useEffect(() => {
    StudyList();
  }, [category]);
  return (
    <Wrap>
      <CategoryNav propFunction={changeMenu} />
      <LanguageNav />
      <StudyWrap>
        {datas &&
          datas?.map((data) => (
            <StudyCard
              key={data.id}
              id={data.id}
              startDate={data.start_at}
              people={data.limit_head_count}
              title={data.title}
              isOnline={data.is_online}
              tag={data.StudyTags}
              positon={data.position}
              writer={data.User.nickname}
              visit={data.visit_count}
            />
          ))}
      </StudyWrap>
    </Wrap>
  );
};

export default Home;
