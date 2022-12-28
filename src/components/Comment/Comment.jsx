import React, { useState, useEffect } from 'react';
import { token, config } from '../../utils/configCreator.jsx';
import {
  CommentAuthor,
  CommentContent,
  CommentButton,
} from './Comment.styles.jsx';
import axios from 'axios';

const Comment = ({ User, commentary }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(commentary);
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const verifyAuthor = async () => {
      const user = await axios.get('/api/user', {
        headers: config(token),
      });
      const currentUserNickname = user.data[0].nickname;
      if (User.nickname === currentUserNickname) setIsAuthor(true);
    };
    verifyAuthor();
  }, [token]);

  console.log(isAuthor);

  const toggleIsEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <>
      <CommentAuthor>{User.nickname}</CommentAuthor>
      {/* 유저가 댓글 작성자일 때만 isEdit 가능하게 해야함.. */}
      <CommentContent>
        {isEdit ? (
          <input
            className='w-full p-3 border border-gray-500 rounded-lg'
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          commentary
        )}
      </CommentContent>
      {isAuthor && <CommentButton>삭제하기</CommentButton>}
    </>
  );
};

export default Comment;
