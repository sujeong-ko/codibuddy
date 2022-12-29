import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsBookmarkHeart, BsBookmarkStarFill } from 'react-icons/bs';
import { token, config } from '../../utils/configCreator';
import { LikeHoverDescription } from './LikeButton.styles';

const LikeButton = ({ id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedStudy, setLikedStudy] = useState([]);

  const getLikedStudy = async () => {
    const result = await axios.get('/api/study/mystudy/like', {
      headers: config(token),
    });
    return result;
  };

  useEffect(() => {
    try {
      getLikedStudy().then((result) => {
        const tempLikedStudy = [...result.data];
        setLikedStudy(tempLikedStudy);
      });
    } catch (err) {
      if (err.response.status === 403) {
        console.log('왜 토큰 없냐구 있는데');
      }
      console.log(err);
    }
  }, []);

  // 이미 찜한 스터디라면 isLiked 값 true로 설정
  useEffect(() => {
    if (likedStudy.find((item) => item.id == id)) {
      setIsLiked(true);
    }
  }, [likedStudy]);

  const handleLikePost = async () => {
    const token = localStorage.getItem('userToken');
    try {
      const result = await axios.post(`/api/like/${id}`, null, {
        headers: config(token),
      });
      setIsLiked(true);
      getLikedStudy();
      console.log('찜하기 클릭했을 때', likedStudy);
    } catch (err) {
      console.log(err);
      if (err.response.status === 403) {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }

      if (err.response.status === 405) {
        if (confirm('이미 찜한 모임입니다. 찜을 취소하시겠습니까?')) {
          await axios.delete(`/api/like/${id}`, {
            headers: config(token),
          });
          setIsLiked(false);
        }
      }
    }
  };
  return (
    <div className='group/item'>
      <LikeHoverDescription>찜하기</LikeHoverDescription>
      {isLiked ? (
        <BsBookmarkStarFill
          className='inline'
          onClick={handleLikePost}
          size={30}
          color='#52B4D0'
        />
      ) : (
        <BsBookmarkHeart
          className='inline'
          onClick={handleLikePost}
          size={30}
          color='#52B4D0'
        />
      )}
    </div>
  );
};

export default LikeButton;
