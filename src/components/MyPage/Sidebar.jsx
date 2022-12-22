import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Side, Title, SidebarItem, Menu } from './Sidebar.styles';

const Sidebar = ({ view }) => {
  const [menus, setMenu] = useState([
    '참가 중인 스터디',
    '완료한 스터디',
    '찜한 스터디',
  ]);
  const navigate = useNavigate();
  return (
    <Side>
      <Title>스터디</Title>
      <Menu>
        {menus.map((menu, index) => (
          <SidebarItem onClick={() => navigate(`/mypage/${menu}`)} key={index}>
            {menu}
          </SidebarItem>
        ))}
      </Menu>
      <Title>알림</Title>
      <Title onClick={() => navigate(`/update-mypage`)}>내 정보 수정</Title>
    </Side>
  );
};

export default Sidebar;
