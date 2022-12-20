import React from 'react';
import Button from '../Button/Button.jsx';
import Comment from './Comment';
import { CommentWrap, CommentInput } from './Comment.styles.jsx';

const comments = [
  { author: '죠리퐁', body: '저도 하고싶어여' },
  { author: '버블티', body: '재밌겠다' },
];

const CommentList = () => {
  return (
    <CommentWrap>
      <div className='font-bold text-lg'>댓글</div>
      <CommentInput placeholder='댓글을 작성해주세요.' />
      <div className='flex justify-end'>
        <Button type='basic' text='등록하기' />
      </div>
      {comments.map((item, idx) => {
        return <Comment key={idx} {...item} />;
      })}
      {/* item에는 author, content, studyId, createdAt 들어있음 */}
    </CommentWrap>
  );
};

export default CommentList;
