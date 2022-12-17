import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { languages } from '../utils/languages';
const LanguageNav = () => {
  return (
    <Wrap>
      {languages?.map((data) => {
        console.log(data.name);
        <Image key={data.name} src={data.img}></Image>;
      })}
      <Image src={languages[0].img}></Image>
      <Image src={languages[1].img}></Image>
      <Image src={languages[3].img}></Image>
      <Image src={languages[4].img}></Image>
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
`;

const Image = tw.img`
  h-[2rem]
  cursor-pointer
`;
