import React, { useEffect, useState } from 'react';
import { Wrap, Button } from './CategotyNav.styles';
const CategoryNav = (props) => {
  const [menu, setMenu] = useState('all');
  // const [check, setCheck] = useState(false);
  const menuChangeHandler = (e) => {
    setMenu(e.target.type);
    // console.log('카네', menu);
    // setCheck(true);
  };
  useEffect(() => {
    props.propFunction(menu);
  }, [menu]);
  return (
    <Wrap>
      <Button onClick={menuChangeHandler} type='popular'>
        인기
      </Button>
      <Button onClick={menuChangeHandler} type='front_end'>
        프론트엔드
      </Button>
      <Button onClick={menuChangeHandler} type='back_end'>
        백엔드
      </Button>
      <Button onClick={menuChangeHandler} type='mobile'>
        모바일
      </Button>
      <Button onClick={menuChangeHandler} type='etc'>
        기타
      </Button>
      <Button onClick={menuChangeHandler} type='all'>
        모두 보기
      </Button>
    </Wrap>
  );
};

export default CategoryNav;
