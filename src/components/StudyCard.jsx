import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
const StudyCard = (data) => {
  return (
    <>
      <Content>
        {/* <PostType>
          <div></div>
        </PostType> */}
        <ContentHeader>
          <ContentDate>시작일{data.startDate}</ContentDate>
          <span>인원수{data.people}</span>
          <ContentTitle>알고리즘 스터디 구해요.{data.title}</ContentTitle>
        </ContentHeader>
        <ContentDetail>
          <ContentTags>#온라인</ContentTags>
          <Languages>
            <Tags>javascript</Tags>
            <Tags>java</Tags>
          </Languages>
        </ContentDetail>
        <Bottom>
          <div>방장이름</div>
          <div>조회수</div>
        </Bottom>
      </Content>
    </>
  );
};

export default StudyCard;

const Content = tw.div`
  flex
  flex-col
  w-[250px]
  h-80
  p-3
  rounded-2xl
  border-solid
  border-2
  border-slate-200
  cursor-pointer
`;
const ContentHeader = tw.div`
flex-[0_0_auto]
`;
const ContentDate = tw.div`
  text-sm
`;

const ContentTitle = tw.div`
  text-2xl
  font-bold
  mt-4
`;
const ContentDetail = tw.div`
  flex
  flex-[2_2_0%]

  flex-col
`;
const ContentTags = tw.div`
  flex
`;
const Languages = tw.div`
  flex
`;
const Tags = tw.div`
  bg-gray-300
  text-xs
  rounded-xl
  p-1
  m-0.5
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  div:first-child {
    font-size: 13px;
    color: grey;
    font-weight: 400;
    display: flex;
    align-items: end;
  }
  div:last-child {
    font-size: 13px;
    font-weight: 400;
  }
`;
