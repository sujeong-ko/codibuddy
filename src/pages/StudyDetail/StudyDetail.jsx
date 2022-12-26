import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button.jsx';
import CommentList from '../../components/Comment/CommentList';
import {
  PostButton,
  StudyContentSection,
  StudyTitleSection,
  StudyInfoList,
  StudyInfoSection,
  DivisionLine,
} from './StudyDetail.styles.jsx';
import axios from 'axios';
import { BsBookmarkHeart } from 'react-icons/bs';
import { useGetOneStudyQuery } from '../../redux/api.jsx';
import Payment from './../Payment/Payment';

const StudyDetail = () => {
  const navigate = useNavigate();
  const { id: study_id } = useParams();
  const [studyInfo, setStudyInfo] = useState({
    title: '',
    contents: '',
    author: '리액트짱이될거야',
    createdAt: '',
    position: '',
    is_online: true,
    headcount: 3,
    start_at: '',
    end_at: '',
    price: '',
    study_tags: [],
  });

  // const {data} = useGetOneStudyQuery();

  useEffect(() => {
    const getOneStudy = async () => {
      await axios
        .get(`/api/study/${study_id}`)
        .then((response) => {
          const studyData = response.data;
          console.log(studyData);
          setStudyInfo({
            ...studyInfo,
            title: studyData.title,
            contents: studyData.contents,
            // util로 분리 or 백에 요청
            createdAt: studyData.createdAt.slice(0, 10),
            position: studyData.position,
            is_online: studyData.is_online,
            headcount: 3,
            start_at: studyData.start_at,
            end_at: studyData.end_at,
            price: studyData.price,
            study_tags: studyData.Study_tags,
          });
        })
        .catch((err) => err.data);
    };
    getOneStudy();
  }, []);

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
          <PostButton className='mr-4'>
            <BsBookmarkHeart size={30} color='#52B4D0' />
          </PostButton>
        </div>
        {/* 유저 상태에 따라 다르게 렌더링 */}
        <div className='flex justify-end'>
          <PostButton>마감</PostButton>
          <PostButton>수정</PostButton>
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
          <span>{studyInfo.headcount}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>시작 예정</span>
          <span>{studyInfo.start_at}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>예상 기간</span>
          <span>{studyInfo.end_at}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>예치금</span>
          <span>{studyInfo.price}</span>
        </StudyInfoList>
        <li>
          <span>사용 언어</span>
          <ul className='my-4'>
            {/* {studyInfo.study_tags.map((item, idx) => (
              <span key={idx} className='mr-4'>
                {item}
              </span>
            ))} */}
          </ul>
        </li>
      </StudyInfoSection>
      <DivisionLine />
      <StudyContentSection>
        <h2 className='font-bold text-lg mb-10'>스터디 소개</h2>
        <div>{studyInfo.contents}</div>
        <div className='flex justify-end'>
          <Button
            type='basic'
            text='참여하기'
            onClick={() => navigate(`/payment/${study_id}`)}
          />
        </div>
      </StudyContentSection>
      <CommentList />
    </>
  );
};

export default StudyDetail;
