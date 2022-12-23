import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Side, Title, SidebarItem, Menu } from './Sidebar.styles';

const Sidebar = () => {
  const [menus, setMenu] = useState([
    '참가 중인 스터디',
    '완료한 스터디',
    '찜한 스터디',
  ]);
  const [type, setType] = useState('참가 중인 스터디');
  return (
    <Side>
      <Title>스터디</Title>
      <Menu>
        {menus.map((menu, index) => (
          <SidebarItem onClick={() => setType({ menu })} key={index}>
            {menu}
          </SidebarItem>
        ))}
      </Menu>
      <Title>알림</Title>
      <Link to='/update-mypage'> 내 정보 수정 </Link>
    </Side>
  );
};

export default Sidebar;
