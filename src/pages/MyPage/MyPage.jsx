import React, { useEffect, useState } from 'react';
import Menubar from '../../components/MyPage/Menubar';
import Profile from '../../components/MyPage/Profile';
import StudyCard from '../../components/StudyCard/StudyCard';
import { Wrap, Box, Item } from './MyPage.styles';
import axios from 'axios';

const MyPage = () => {
  const token = localStorage.getItem('userToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [category, setCategory] = useState('attend');
  const changeMenu = (menu) => {
    setCategory(menu);
  };
  const [userDatas, setUserDatas] = useState();
  const [likes, setLikes] = useState();
  const userInfo = async () => {
    await axios
      .get(`/api/user`, config)
      .then((response) => {
        setUserDatas(response.data[0]);
      })
      .catch((err) => console.log(err));
  };
  const likeList = async () => {
    await axios
      .get(`/api/study/mystudy/${category}`, config)
      .then((response) => {
        // console.log(response.data);
        setLikes(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    userInfo();
    likeList();
  }, [category]);
  return (
    <Wrap>
      <Profile
        image={userDatas?.profile_image}
        nickname={userDatas?.nickname}
        introduce={userDatas?.introduce}
        point={userDatas?.point}
      />
      <Menubar propFunction={changeMenu} />
      <Box>
        <Item>
          {likes &&
            likes?.map((data) => (
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
        </Item>
      </Box>
    </Wrap>
  );
};

export default MyPage;
