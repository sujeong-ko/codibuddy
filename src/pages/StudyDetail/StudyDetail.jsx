import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button.jsx';
import CommentList from '../../components/Comment/CommentList';
import LikeButton from '../../components/LikeButton/LikeButton.jsx';
import {
  PostButton,
  StudyContentSection,
  StudyTitleSection,
  StudyInfoList,
  StudyInfoSection,
  DivisionLine,
} from './StudyDetail.styles.jsx';
import axios from 'axios';
import getOneStudy from '../../utils/getOneStudy.jsx';
import { BsBookmarkHeart } from 'react-icons/bs';

const StudyDetail = () => {
  const navigate = useNavigate();
  const { id: study_id } = useParams();
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    contents: '',
    author: '',
    createdAt: '',
    position: '',
    is_online: true,
    headcount: 0,
    start_at: '',
    end_at: '',
    price: '',
    limit_head_count: 0,
    study_tags: [],
  });

  useEffect(() => {
    try {
      getOneStudy(study_id).then((response) => {
        const studyData = response.data;

        if (!studyData) {
          navigate('/notFound');
        }

        setStudyInfo({
          ...studyInfo,
          title: studyData.title,
          contents: studyData.contents,
          author: studyData.User.nickname,
          // createdAt 년월일만 나오게 하는 거 util로 분리 or 백에 요청
          createdAt: studyData.createdAt.slice(0, 10),
          position: studyData.position,
          is_online: studyData.is_online,
          headcount: studyData.head_count,
          limit_head_count: studyData.limit_head_count,
          start_at: studyData.start_at,
          end_at: studyData.end_at,
          price: studyData.price,
          study_tags: studyData.StudyTags,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRecruit = () => {
    try {
      navigate(`/payment/${study_id}`);
    } catch (err) {
      console.log('참여하기 버튼 에러', err.response);
    }
  };

  return (
    <>
      <div className='mt-8 mb-4'>
        <button onClick={() => navigate('/')}>목록 보기</button>
      </div>
      <StudyTitleSection>
        <div>
          <h1 className='text-3xl font-bold'>{studyInfo.title}</h1>
        </div>
        <div className='flex justify-between'>
          <div>
            <span>{studyInfo.author} | </span>
            <span>{studyInfo.createdAt}</span>
          </div>
          <PostButton>
            <LikeButton id={study_id} />
          </PostButton>
        </div>
        {/* 유저 상태에 따라 다르게 렌더링 */}
        <div className='flex justify-end'>
          {/* <PostButton>수정</PostButton>
          <PostButton>삭제</PostButton> */}
        </div>
      </StudyTitleSection>
      <DivisionLine />
      <StudyInfoSection>
        <StudyInfoList>
          <span>모집 구분</span>
          <span>{studyInfo.position}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>진행 방식</span>
          <span>{studyInfo.is_online ? '온라인' : '오프라인'}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>모집 인원</span>
          <span>
            {studyInfo.headcount}명 신청중 | {studyInfo.limit_head_count}명
          </span>
        </StudyInfoList>
        <StudyInfoList>
          <span>시작 예정</span>
          <span>{studyInfo.start_at}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>종료 예정</span>
          <span>{studyInfo.end_at}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>예치금</span>
          <span>{studyInfo.price}원</span>
        </StudyInfoList>
      </StudyInfoSection>
      <div className='my-4'>
        <span>사용 언어</span>
        <ul className='my-4'>
          {studyInfo.study_tags.map((item) => (
            <li key={item.tag_id} className='mr-4 inline'>
              <img
                src={item.Tag.tag_image}
                className='inline h-[2.5rem] mr-2'
              />
              <span>{item.Tag.tag_name}</span>
            </li>
          ))}
        </ul>
      </div>
      <DivisionLine />
      <StudyContentSection>
        <h2 className='font-bold text-lg mb-10'>스터디 소개</h2>
        <div>{studyInfo.contents}</div>
        <div className='flex justify-end'>
          <Button type='basic' text='참여하기' onClick={handleRecruit} />
        </div>
      </StudyContentSection>
      <CommentList />
    </>
  );
};

export default StudyDetail;
