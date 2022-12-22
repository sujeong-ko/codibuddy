import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Side = tw.div`
flex
flex-col
items-center
w-1/4
bg-slate-300
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
const SidebarItem = styled.div`
  margin: 2px 10px;
  font-weight: 400;
  padding: 5px;
  cursor: pointer;
  :hover {
    color: #187f7f;
  }
`;

const Sidebar = ({ view }) => {
  const [menus, setMenu] = useState([
    '스터디',
    '참가 중인 스터디',
    '완료한 스터디',
    '찜한 스터디',
  ]);
  const navigate = useNavigate();
  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => (
          <SidebarItem onClick={() => navigate(`/mypage/${menu}`)} key={index}>
            {menu}
          </SidebarItem>
        ))}
      </Menu>
    </Side>
  );
};

export default Sidebar;
