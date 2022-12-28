import React, { useState, useEffect } from 'react';
import { Wrap, Button } from './Menubar.styles';

const Menubar = (props) => {
  const [name, setName] = useState('attend');

  const menuChangeHandler = (e) => {
    setName(e.target.type);
    // console.log('메뉴', name);
  };
  useEffect(() => {
    props.propFunction(name);
  }, [name]);
  return (
    <Wrap>
      <Button onClick={menuChangeHandler} type='attend'>
        참여 스터디
      </Button>
      <Button onClick={menuChangeHandler} type='expire'>
        완료 스터디
      </Button>
      <Button onClick={menuChangeHandler} type='like'>
        찜한 스터디
      </Button>
    </Wrap>
  );
};

export default Menubar;
