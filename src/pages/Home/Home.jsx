import React, { useEffect, useState } from 'react';
import CategoryNav from '../../components/NavBar/CategoryNav';
import LanguageNav from '../../components/NavBar/LanguageNav';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, StudyWrap } from './Home.styles.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import modalSlice from '../../redux/modalSlice';

const Home = () => {
  // const dispatch = useDispatch();

  // const searchParams = new URLSearchParams(window.location.search);
  // const loginModalOpen = searchParams.get('loginModal');

  // useEffect(() => {
  //   if (loginModalOpen === '1') dispatch(modalSlice.actions.loginOpen());
  // }, []);

  const [category, setCategory] = useState('all');
  const changeMenu = (menu) => {
    // console.log(menu);
    setCategory(menu);
  };
  const [datas, setDatas] = useState();
  const StudyList = async () => {
    if (category === 'all') {
      await axios.get(`/api/study`).then((response) => {
        // console.log('all:', response.data);
        setDatas(response.data);
      });
    } else {
      await axios.get(`/api/study/kind/${category}`).then((response) => {
        // console.log(`${category}`, response.data);
        setDatas(response.data);
      });
    }
  };
  // useEffect(() => {
  //   StudyList();
  // }, []);
  useEffect(() => {
    StudyList();
  }, [category]);
  return (
    <Wrap>
      <CategoryNav propFunction={changeMenu} />
      <LanguageNav tagType={category} />
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
