import React, { useEffect, useState } from 'react';
import { Wrap, ImageWrap, Image } from './LanguageNav.styles';
import axios from 'axios';
const LanguageNav = ({ tagType }) => {
  const [languages, setLanguages] = useState();
  const LanguageList = async () => {
    await axios.get(`api/tag/${tagType}`).then((response) => {
      setLanguages(response.data);
    });
  };
  useEffect(() => {
    LanguageList();
  }, []);
  useEffect(() => {
    LanguageList();
  }, [tagType]);

  return (
    <Wrap>
      {languages &&
        languages.map((data, index) => (
          <ImageWrap key={index}>
            <Image src={data.tag_image}></Image>
          </ImageWrap>
        ))}
    </Wrap>
  );
};

export default LanguageNav;
