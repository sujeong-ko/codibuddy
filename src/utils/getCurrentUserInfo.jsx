import axios from 'axios';

const getCurrentUserInfo = async (config) => {
  try {
    const result = await axios.get(`/api/user`, {
      headers: config,
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getCurrentUserInfo;
