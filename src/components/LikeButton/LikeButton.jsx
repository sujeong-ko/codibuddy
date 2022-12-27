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
    } catch (err) {
      console.log(err.response);
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
