import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Content = tw.div`
  flex
  flex-col
  w-[310px]
  h-80
  p-3
  rounded-2xl
  border-solid
  border-2
  border-slate-200
  cursor-pointer
  m-3
`;
const ContentHeader = tw.div`
flex-[0_0_auto]
`;
const ContentDate = tw.div`
  text-sm
`;

const ContentTitle = tw.div`
  text-xl
  font-bold
  mt-4
`;
const ContentDetail = tw.div`
  flex
  flex-[2_2_0%]
  flex-col
`;
const ContentTagsWrap = tw.div`
flex
gap-1
`;
const ContentTags = tw.div`
  flex
`;
const Languages = tw.div`
  flex
  flex-wrap
`;
const Tags = tw.div`
  text-xs
  rounded-xl
  p-1
  m-0.5
`;
const Image = tw.img`
h-[2rem]
cursor-pointer
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
    margin-right: 8px;
  }
`;

export {
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
};
