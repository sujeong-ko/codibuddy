import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Comment from './Comment';
import { CommentWrap, CommentInput } from './Comment.styles.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const { id: study_id } = useParams();
  const { register, handleSubmit } = useForm();
  const getComments = async () => {
    await axios
      .get(`/api/comment/${study_id}`)
      .then((response) => {
        setComments([...response.data]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getComments();
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios
        .post('/api/comment', {
          study_id,
          commentary: data.commentary,
        })
        .then((result) => setComments([result.data, ...comments]));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <CommentWrap onSubmit={handleSubmit(onSubmit)}>
      <div className='font-bold text-lg'>댓글</div>
      <CommentInput
        {...register('commentary')}
        placeholder='댓글을 작성해주세요.'
      />
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
