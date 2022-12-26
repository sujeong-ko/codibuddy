import tw from 'tailwind-styled-components';
const Wrap = tw.div`
flex
flex-wrap
gap-4
`;
const Box = tw.div`
w-4/5
`;
const Item = tw.div`
flex
flex-wrap
gap-4
bg-repeat-space
`;
export { Wrap, Box, Item };
