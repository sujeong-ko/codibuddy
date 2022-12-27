import React, { useState } from 'react';
import {
  CommentAuthor,
  CommentContent,
  CommentButton,
} from './Comment.styles.jsx';

const Comment = ({ User, commentary }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  const [localContent, setLocalContent] = useState(commentary);

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
      {isEdit ? (
        <CommentButton onClick={toggleIsEdit}>수정 완료</CommentButton>
      ) : (
        <div>
          <CommentButton className='mr-3' onClick={toggleIsEdit}>
            수정하기
          </CommentButton>
          <CommentButton>삭제하기</CommentButton>
        </div>
      )}
    </>
  );
};

export default Comment;
