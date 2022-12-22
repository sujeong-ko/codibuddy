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
