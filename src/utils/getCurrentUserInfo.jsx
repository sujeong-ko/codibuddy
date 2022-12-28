import axios from 'axios';

const getCurrentUserInfo = async (token) => {
  try {
    const result = await axios.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getCurrentUserInfo;
