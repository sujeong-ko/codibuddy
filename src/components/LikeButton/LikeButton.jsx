import React from 'react';
import axios from 'axios';
import { BsBookmarkHeart } from 'react-icons/bs';
import { token, config } from '../../utils/configCreator';
import { LikeHoverDescription } from './LikeButton.styles';

const LikeButton = ({ id }) => {
  const handleLikePost = async () => {
    try {
      const result = await axios.post(`/api/like/${id}`, null, {
        headers: config(token),
      });
      console.log(result);
    } catch (err) {
      if (err.response.status === 405) {
        if (confirm('이미 찜한 모임입니다. 찜을 취소하시겠습니까?')) {
          await axios.delete(`/api/like/${id}`, null, {
            headers: config(token),
          });
        }
        return;
      } else if (err.response.status === 403) {
        alert('로그인이 필요한 서비스입니다.');
        return;
      }
    }
  };
  return (
    <div className='group/item'>
      <LikeHoverDescription>찜하기</LikeHoverDescription>
      <BsBookmarkHeart
        className='inline'
        onClick={handleLikePost}
        size={30}
        color='#52B4D0'
      />
    </div>
  );
};

export default LikeButton;
