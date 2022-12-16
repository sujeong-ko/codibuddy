import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import Button from '../components/Button';
import CommentList from '../components/CommentList';

const StudyDetail = () => {
  const navigate = useNavigate();
  const studyInfo = {
    title: '사이드 프로젝트 프론트 팀원 구합니다!',
    author: '리액트짱이될거야',
    createdDate: '2022-12-16',
    position: 'frontEnd',
    place: 'online',
    headcount: 3,
    startDate: '2022-12-20',
    duration: 1,
    deposit: 1000,
    language: ['JavaScript', 'React', 'Java'],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, eligendi dolor optio voluptate, in quo voluptatem sit? Facere officiis id adipisci ullam aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, eligendi dolor optio voluptate, in quo voluptatem sit? Facere officiis id adipisci ullam aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, eligendi dolor optio voluptate, in quo voluptatem sit? Facere officiis id adipisci ullam aliquid?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, elLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, elLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, elLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quod magnam itaque molestias suscipit mollitia, el',
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
            <span>{studyInfo.createdDate}</span>
          </div>
          <PostButton className='mr-4'>찜하기</PostButton>
        </div>
        {/* 유저 상태에 따라 다르게 렌더링 */}
        <div className='flex justify-end'>
          <PostButton>마감</PostButton>
          <PostButton>수정</PostButton>
          <PostButton>삭제</PostButton>
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
          <span>{studyInfo.place}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>모집 인원</span>
          <span>{studyInfo.headcount}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>시작 예정</span>
          <span>{studyInfo.startDate}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>예상 기간</span>
          <span>{studyInfo.duration}</span>
        </StudyInfoList>
        <StudyInfoList>
          <span>예치금</span>
          <span>{studyInfo.deposit}</span>
        </StudyInfoList>
        <li>
          <span>사용 언어</span>
          <ul className='my-4'>
            {studyInfo.language.map((item, idx) => (
              <span key={idx} className='mr-4'>
                {item}
              </span>
            ))}
          </ul>
        </li>
      </StudyInfoSection>
      <DivisionLine />
      <StudyContentSection>
        <h2 className='font-bold text-lg mb-10'>스터디 소개</h2>
        <div>{studyInfo.content}</div>
        <div className='flex justify-end'>
          <Button type='basic' text='참여하기' />
        </div>
      </StudyContentSection>
      <CommentList />
    </>
  );
};

export default StudyDetail;

const PostButton = tw.button`
mr-4`;

const StudyTitleSection = styled.div`
  > div {
    margin: 40px 0;
  }
`;

const StudyInfoSection = tw.ul`
grid grid-cols-2 gap-y-4`;

const StudyInfoList = styled.li`
  span {
    &: first-child {
      margin-right: 40px;
    }
    &: last-child {
      font-weight: bold;
    }
  }
`;

const StudyContentSection = styled.div`
  > div {
    margin: 20px 0;
  }
`;

const DivisionLine = tw.div`
mt-6
mb-10
border-b-2
border-grey-200
`;
