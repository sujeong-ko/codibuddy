import React from 'react';
import {
  Content,
  ContentDate,
  ContentDetail,
  ContentHeader,
  ContentTags,
  ContentTitle,
  Languages,
  Tags,
  Bottom,
} from './StudyCard.styles';
const StudyCard = ({ startDate, people, title, positon, isOnline, tag }) => {
  // const tags = [...tag];
  return (
    <>
      <Content>
        {/* <PostType>
          <div></div>
        </PostType> */}
        <ContentHeader>
          <ContentDate>시작일 {startDate}</ContentDate>
          <span>인원수 {people}</span>
          <ContentTitle>{title}</ContentTitle>
        </ContentHeader>
        <ContentDetail>
          <ContentTags>{isOnline}</ContentTags>
          <Languages>
            <Tags>#{positon}</Tags>
            {/* <Tags>java</Tags> */}
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
