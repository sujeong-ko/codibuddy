import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Wrap = tw.div`
sticky
flex

gap-5
p-2
items-center
min-h-[33px]
w-fit
flex-wrap
`;

const ImageWrap = tw.div`
flex
gap-2
w-8
`;

const Image = tw.img`
h-[2rem]
cursor-pointer
`;

export { Wrap, ImageWrap, Image };
