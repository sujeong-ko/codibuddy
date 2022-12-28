import React, { useEffect, useState } from 'react';
import { Wrap, ImageWrap, Image } from './LanguageNav.styles';
// import { languages } from '../../utils/languages';s
import axios from 'axios';
const LanguageNav = () => {
  const [languages, setLanguages] = useState();
  const LanguageList = async () => {
    await axios.get('api/tag').then((response) => {
      // console.log(response.data[0].TagKinds);
      setLanguages(response.data);
    });
  };
  useEffect(() => {
    LanguageList();
  }, []);

  return (
    <Wrap>
      {languages?.map((data, index) => (
        <ImageWrap key={index}>
          <Image src={data.tag_image}></Image>
        </ImageWrap>
      ))}
    </Wrap>
  );
};

export default LanguageNav;
