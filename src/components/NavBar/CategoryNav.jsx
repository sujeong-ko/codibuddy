import React from 'react';
import { Wrap, Button } from './CategotyNav.styles';
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
