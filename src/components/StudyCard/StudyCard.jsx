import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Content,
  ContentDate,
  ContentDetail,
  ContentHeader,
  ContentTagsWrap,
  ContentTags,
  ContentTitle,
  Languages,
  Tags,
  Bottom,
  Image,
} from './StudyCard.styles';
const StudyCard = ({
  id,
  startDate,
  people,
  title,
  positon,
  isOnline,
  tag,
  writer,
  visit,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Content onClick={() => navigate(`study/${id}`)}>
        <ContentHeader>
          <ContentDate>시작일 {startDate}</ContentDate>
          <span>인원수 {people}</span>
          <ContentTitle>{title}</ContentTitle>
        </ContentHeader>
        <ContentDetail>
          <ContentTagsWrap>
            {isOnline ? (
              <ContentTags>#온라인</ContentTags>
            ) : (
              <ContentTags>#오프라인</ContentTags>
            )}
            <ContentTags>#{positon}</ContentTags>
          </ContentTagsWrap>
          <Languages>
            {tag &&
              tag?.map((item, index) => (
                <Tags key={index}>
                  <Image src={item.Tag.tag_image}></Image>
                  {/* {item.Tag.tag_name} */}
                </Tags>
              ))}
          </Languages>
        </ContentDetail>
        <Bottom>
          <div>{writer}</div>
          <div>👀 {visit}</div>
        </Bottom>
      </Content>
    </>
  );
};

export default StudyCard;
