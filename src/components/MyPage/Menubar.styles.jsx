import tw from 'tailwind-styled-components';

const Wrap = tw.div`
sticky
flex
gap-10
p-3
items-center
min-h-[33px]
border-b-2
`;

const Menu = tw.div`
flex
gap-4
`;
const Button = tw.li`
list-none
text-xl
font-bold
cursor-pointer
hover:text-[#52b4d0]
`;

export { Wrap, Menu, Button };
