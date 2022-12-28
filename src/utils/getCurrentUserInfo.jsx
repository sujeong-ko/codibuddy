import axios from 'axios';

const getCurrentUserInfo = async (config) => {
  try {
    const result = await axios.get(`/api/user`, {
      headers: config,
    });
    return result;
  } catch (err) {
    console.log('유저 정보가 없습니다.');
  }
};

export default getCurrentUserInfo;
