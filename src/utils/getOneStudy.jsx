import axios from 'axios';

const getOneStudy = async (study_id) => {
  try {
    const result = await axios.get(`/api/study/${study_id}`);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getOneStudy;
