import React, { useEffect, useState } from 'react';
import { Wrap, ImageWrap, Image } from './LanguageNav.styles';
// import { languages } from '../../utils/languages';s
import axios from 'axios';
const LanguageNav = ({ tagType }) => {
  const [tag, setTag] = useState('all');
  const [languages, setLanguages] = useState();
  const LanguageList = async () => {
    await axios.get(`api/tag/${tag}`).then((response) => {
      setLanguages(response.data);
    });
  };
  useEffect(() => {
    LanguageList();
  }, []);
  useEffect(() => {
    setTag(tagType);
    LanguageList();
  }, [tagType]);

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
