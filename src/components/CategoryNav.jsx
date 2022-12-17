import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
const CategoryNav = () => {
  return (
    <Wrap>
      <Button>인기</Button>
      <Button>프론트엔드</Button>
      <Button>백엔드</Button>
      <Button>모바일</Button>
      <Button>기타</Button>
      <Button>모두 보기</Button>
    </Wrap>
  );
};

export default CategoryNav;

const Wrap = tw.div`
sticky
flex
gap-10
p-3
items-center
min-h-[33px]
border-b-2
`;
const Button = tw.li`
list-none
text-xl
font-bold
text-slate-800
cursor-pointer
`;
