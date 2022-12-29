import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Comment from './Comment';
import { CommentWrap, CommentInput } from './Comment.styles.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { config } from '../../utils/configCreator.jsx';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [localContent, setLocalContent] = useState('');
  const { id: study_id } = useParams();
  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    setLocalContent(e.target.value);
  };

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
    const token = localStorage.getItem('userToken');
    try {
      if (!token) alert('로그인한 사용자만 등록할 수 있습니다.');
      await axios
        .post(
          '/api/comment',
          {
            study_id,
            commentary: data.commentary,
          },
          { headers: config(token) },
        )
        .then(() => getComments());
      setLocalContent('');
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
        value={localContent}
        onChange={handleChange}
      />
      <div className='flex justify-end'>
        <Button type='basic' text='등록하기' />
      </div>
      {comments.map((item, idx) => {
        return <Comment key={idx} {...item} getComments={getComments} />;
      })}
      {/* item에는 id, study_id, User 객체, studyId, createdAt 들어있음 */}
    </CommentWrap>
  );
};

export default CommentList;
