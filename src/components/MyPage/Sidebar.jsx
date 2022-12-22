import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Side = tw.div`
flex
flex-col
items-center
w-1/4
h-[350px]
border
`;
const Title = tw.div`
mt-3
w-3/4
flex
justify-start
font-bold
cursor-pointer
`;
const Menu = tw.div`
`;
const SidebarItem = tw.div`
p-1
cursor-pointer
hover:text-[#52b4d0]
`;

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
