import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Side = tw.div`
flex
flex-col
items-center
w-40
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

export { Side, Title, Menu, SidebarItem };
