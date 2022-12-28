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
const Button = tw.li`
list-none
text-xl
font-bold
${(props) => (props.checked ? 'text-[#667288]' : 'text-slate-800')}
;
cursor-pointer
`;

export { Wrap, Button };
