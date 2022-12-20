import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { languages } from '../utils/languages';
const LanguageNav = () => {
  return (
    <Wrap>
      {languages?.map((data) => (
        <ImageWrap key={data.name}>
          <Image src={data.img}></Image>
        </ImageWrap>
      ))}
    </Wrap>
  );
};

export default LanguageNav;

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
