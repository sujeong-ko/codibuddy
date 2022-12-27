import React, { useState } from 'react';
import { Wrap, ImageWrap, Image } from './LanguageNav.styles';
import { languages } from '../../utils/languages';
const LanguageNav = () => {
  const [menu, setMenu] = useState([]);
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
